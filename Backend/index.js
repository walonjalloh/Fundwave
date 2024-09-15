import express from 'express'
import cors from "cors"
import corsOption from "./configs/corsOption.js"
import connectDB from "./configs/mongodb.js"
import { config } from 'dotenv'
import Campaign from './Model/compaign.js'
import User from './Model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express()
const port = process.env.PORT || 3800

config()

connectDB()

app.use(express.json());
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));

// Middleware to authenticate user
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id })

    if (!user) {
      throw new Error()
    }

    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' })
  }
}

// Create a new campaign (now requires authentication)
app.post('/campaigns', auth, async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({email})
    const campaign = new Campaign({
      ...req.body,
      creator: user._id
    })
    await campaign.save()
    
    // Add campaign to user's campaigns
    user.campaigns.push(campaign._id)
    await user.save()

    res.status(201).json(campaign)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Read all campaigns
app.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find({})
    res.send(campaigns)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Read a specific campaign
app.get('/campaigns/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id)
    if (!campaign) {
      return res.status(404).send()
    }
    res.send(campaign)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Update a campaign
app.patch('/campaigns/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!campaign) {
      return res.status(404).send()
    }
    res.send(campaign)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete a campaign
app.delete('/campaigns/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id)
    if (!campaign) {
      return res.status(404).send()
    }
    res.send(campaign)
  } catch (error) {
    res.status(500).send(error)
  }
})

// User sign up
app.post('/users/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, country, password, capitalCity, phoneNumber} = req.body

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !country || !password || !capitalCity || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" })
    }
    // Check if user with this email already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    console.log(hashPassword)
    // Create new user
    const user = new User({
      email,
      firstName,
      lastName, 
      country, 
      password: hashPassword,
      capitalCity,
      phoneNumber
    })

    await user.save()
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    
    // Don't send password in response
    const userResponse = user.toObject()
    delete userResponse.password

    res.status(201).json({ user: userResponse, token })
  } catch (error) {
    console.error('Signup error:', error)
    res.status(500).json({ message: "An error occurred during signup" })
  }
})

// User sign in
app.post('/users/signin', async (req, res) => {
  try {
    const { email, password } = req.body
    if(!email || !password){
        return res.status(404).json({message: "Email or Password missing"})
    }
    console.log(email)
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
       return res.status(401).json({ error: 'Login failed! Check authentication credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
       return res.status(401).json({ error: 'Login failed! Check authentication credentials' })
    }
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    // Don't send password in response
    const userResponse = user.toObject()
    delete userResponse.password
    res.status(200).json({ user: userResponse, token })
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})


//get user profile by email 
app.get('/users/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Create a sanitized user object without sensitive information
    const sanitizedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      capitalCity: user.capitalCity,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
      campaigns: user.campaigns,
      // Add any other fields you want to include
      // For example:
      // totalDonated: user.totalDonated,
      // badges: user.badges,
      // recentDonations: user.recentDonations
    }

    res.status(200).json(sanitizedUser)
  } catch (error) {
    console.error('Error fetching user profile:', error)
    res.status(500).json({ message: "An error occurred while fetching the user profile" })
  }
})


// User sign out (Note: This is typically handled on the client-side by removing the token)
app.post('/users/signout', (req, res) => {
  // Here you might invalidate the token on the server-side if you're keeping track of valid tokens
  res.json({ message: 'User signed out successfully' })
})

// Get all campaigns for a user
app.get('/user/campaigns', auth, async (req, res) => {
  try {
    await req.user.populate('campaigns')
    res.status(200).json(req.user.campaigns)
  } catch (error) {
    res.status(500).json(error)
  }
})

// //auth user
// app.get('/users/me', auth, async (req, res) => {
//   try {
//     // The auth middleware should attach the user to the request
//     const user = req.user;
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user data" });
//   }
// });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})


