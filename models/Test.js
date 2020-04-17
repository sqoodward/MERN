const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  humidity: {
    type: Number
  },
  celcius: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Test = mongoose.model('test', TestSchema);
//'test' is the collection name
