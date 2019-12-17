/* config file allows for global variables. config module connects to the default.json in the background; config.get("jsonObjectHere") allows you to retrive things.
we put the mongoURI in a seperate file to make it less cluttered here, but hardcoding it in the function is also valid. */

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection successful!');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
