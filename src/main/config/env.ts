import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/clean-node-api",
  port: process.env.PORT || 5050,
};
