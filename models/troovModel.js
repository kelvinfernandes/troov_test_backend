const mongoose = require("mongoose");

const TroovModel = mongoose.model(
  "troov_test",
  {
    login: {
      type: String,

    },
    email_user: {
      type: String,

    },
    password: {
      type: String,
    },
   
      objet_name: {
        type: String,
        
      },
      objet_lieu: {
        type: String,
     
      },
      objet_date: {
        type: Date,
        // default: Date.now
        
      }
    },
    "posts"
    );
    
    module.exports = { TroovModel };