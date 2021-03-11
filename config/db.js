const mongoose = require('mongoose');
require('dotenv').config({path: "variables.env"});

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    console.log("DB Connected")
  }catch(err){
    console.log(err.message);
    process.exit(1);
  }
}
module.exports = connectDB;