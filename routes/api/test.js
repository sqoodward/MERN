const express = require('express');
const router = express.Router();

const Test = require('../../models/Test');

//MQTT INIT
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.0.110');

//MQTT subscribe
client.on('connect', function() {
  client.subscribe('outTopic');
});

client.on('message', function(topic, message) {
  let unParsedMessage = message.toString();
  let parsedMessage = JSON.parse(unParsedMessage); //convert incoming json to an object
  console.log(parsedMessage);

  let humidity = parseFloat(parsedMessage.humidity); //convert string to float
  let celcius = parseFloat(parsedMessage.celcius); //convert string to float

  test = new Test({
    //insert data into schema and validate
    humidity: humidity,
    celcius: celcius
  });

  test.save(); //push data into DB
});

router.post('/', async (req, res) => {
  const { humidity, celcius } = req.body;
  console.log(humidity);
  try {
    test = new Test({
      humidity,
      celcius
    });

    await test.save();
    res.end('taking incoming post requests into DB');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
