const mongoose = require('mongoose');


const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://yadavnakul522:4Su71j4z7UZeLnvF@cluster0.osd62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected');
   
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;