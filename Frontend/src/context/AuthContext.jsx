import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";
import { signin, signup, getAllorcreate } from "../urls/useUrl.jsx";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //signin fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //signup fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [capitalCity, setCapitalCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  //user details,campaign details and authentication
  const [user, setUser] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [campaignList, setCampaignList] = useState([]);
  const [userLogin, setUserLogin] = useState(false)

  //campaign creation fields
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [milestoneTitle, setMilestoneTitle] = useState("");
  const [amountNeeded, setAmountNeeded] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [teamInformation, setTeamInformation] = useState("");
  const [expectedImpact, setExpectedImpact] = useState("");
  const [risksAndChallenges, setRisksAndChallenges] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getAllCampaign = async () => {
      try {
        const response = await axios.get(getAllorcreate);
        console.log(response.data);
        setCampaignList(campaignList.concat(response.data));
      } catch (error) {
        console.log(`error ${error}`);
      }
    };
    getAllCampaign();
  }, []);

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    try {
      const newCampaign = {
        email,
        campaignName,
        campaignDescription,
        fundingGoal,
        milestoneTitle,
        amountNeeded,
        completionDate,
        teamInformation,
        expectedImpact,
        risksAndChallenges,
        category,
      };
      const response = await axios.post(getAllorcreate, newCampaign);
      console.log(response.data);
      toast("campaign created sucessfully");
      navigate('/explore')
      setAmountNeeded("");
      setCampaignDescription("");
      setCampaignName("");
      setCategory("");
      setFundingGoal("");
      setRisksAndChallenges("");
      setCompletionDate("");
      setMilestoneTitle("");
      setEmail("");
      setTeamInformation("");
      setExpectedImpact("");
    } catch (error) {
      console.log(`errror ${error}`);
      toast("error creating campaign");
      setAmountNeeded("");
      setCampaignDescription("");
      setCampaignName("");
      setCategory("");
      setFundingGoal("");
      setRisksAndChallenges("");
      setCompletionDate("");
      setMilestoneTitle("");
      setEmail("");
      setTeamInformation("");
      setExpectedImpact("");
    }
  };

  const handleSignin = async (e) => {
    try {
      e.preventDefault();
      const loginUser = {
        email,
        password,
      };
      const response = await axios.post(signin, loginUser);
      console.log(response.data.user);
      setUser(user.concat(response.data.user));
      toast("user login successfull");
      setIsAuthenticated(!isAuthenticated);
      setUserLogin(!userLogin)
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(`error ${error}`);
      toast("user login failed");
      setPassword("");
      setEmail("");
    }
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      const newUser = {
        firstName,
        lastName,
        capitalCity,
        phoneNumber,
        country,
        email,
        password,
      };

      const response = await axios.post(signup, newUser);
      console.log(response.data);
      toast("user sign up sucessfull");
      navigate('/')
      setCapitalCity("");
      setCountry("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    } catch (error) {
      console.log(`error ${error}`);
      toast("user signup failed");
      setCapitalCity("");
      setCountry("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        handleSignin,
        email,
        setEmail,
        setPassword,
        password,
        handleSignUp,
        firstName,
        lastName,
        phoneNumber,
        capitalCity,
        country,
        setCapitalCity,
        setCountry,
        setFirstName,
        setLastName,
        setPhoneNumber,
        isAuthenticated,
        user,
        handleLogout,
        handleCreateCampaign,
        campaignDescription,
        campaignList,
        campaignName,
        fundingGoal,
        amountNeeded,
        completionDate,
        risksAndChallenges,
        milestoneTitle,
        category,
        teamInformation,
        expectedImpact,
        setAmountNeeded,
        setCampaignDescription,
        setCampaignName,
        setCategory,
        setFundingGoal,
        setRisksAndChallenges,
        setCompletionDate,
        setMilestoneTitle,
        setTeamInformation,
        setExpectedImpact,
        userLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
