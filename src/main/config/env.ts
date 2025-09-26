// Only load dotenv in non-production environments
if (process.env.NODE_ENV !== "production") {
  try {
    require("dotenv").config();
  } catch (error) {
    // dotenv not available, continue without it
  }
}

export default {
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/clean-node-api",
  port: process.env.PORT || 5050,
};
