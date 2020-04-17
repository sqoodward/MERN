const express = require('express');
const router = express.Router();

var path = require('path');

const Test = require('../../models/Test');
const fs = require('fs');

setInterval(() => {
  Test.find(function (err, user) {
    let data = JSON.stringify(user);
    console.log(data);
    fs.writeFileSync('./public/data.json', data);
  });
}, 1000);

module.exports = router;
