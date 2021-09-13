const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://kelvin:Kmonteiro98@cluster0.yspv3.mongodb.net/troov_test",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
)