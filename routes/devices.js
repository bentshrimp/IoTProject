var express = require("express");
var router = express.Router();
const mqtt = require("mqtt");
const BME280 = require("../models/BME280");
const PMS7003m = require("../models/PMS7003m");

// MQTT Server 접속
const client = mqtt.connect("mqtt://192.168.43.123");
//웹에서 rest-full 요청받는 부분(POST)
router.post("/fan", function (req, res, next) {
  res.set("Content-Type", "text/json");
  if (req.body.flag == "on") {
    // MQTT->fan : 1
    client.publish("fan", "1");
    res.send(JSON.stringify({ fan: "on" }));
  } else {
    client.publish("fan", "2");
    res.send(JSON.stringify({ fan: "off" }));
  }
});
// 안드로이드에서 요청받는 부분(POST)
router.post("/device", function (req, res, next) {
  console.log(req.body.sensor);
  if (req.body.sensor == "bme280") {
    BME280.find({})
      .sort({ created_at: -1 })
      .limit(10)
      .then((data) => {
        res.send(JSON.stringify(data));
      });
  } else if (req.body.sensor == "pms7003m") {
    PMS7003m.find({})
      .sort({ created_at: -1 })
      .limit(10)
      .then((data) => {
        res.send(JSON.stringify(data));
      });
  } else {
    //sensorLogs=dbObj.collection('mq2');
  }
});
module.exports = router;
