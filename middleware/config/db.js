// Bring in Mongoose
const mongoose = require('mongoose');
// Connection to MongoDB
console.log(`MongoDB URI: ${process.env.MONGO_URI}`.cyan.underline.bold);

// MongoDB Atlas connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, mongoOptions);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold,
      `${conn.connection.port}`.cyan.underline.bold,
      `${conn.connection.name}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connection
module.exports = connectDB;
