// configs/corsOption.js
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:5173','https://fundwave-frontend.vercel.app/'];

const corsOption = {
  origin: (origin, callback) => {
    console.log('Origin:', origin); // Log the origin for debugging
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

export default corsOption;
