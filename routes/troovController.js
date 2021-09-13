const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const ObjectID = require('mongoose').Types.ObjectId;

const { TroovModel } = require('../models/troovModel');



router.get('/', (req, res) => {
  TroovModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});

//Affiche tous les objets
router.post('/', (req, res) => {
  const newRecord = new TroovModel({
    objet_name: req.body.objet_name,
    objet_lieu: req.body.objet_lieu,
    objet_date: req.body.objet_date,

  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});


// modification d'un objet selon son id passé en parametre dans l'url
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    objet_name: req.body.objet_name,
    objet_lieu: req.body.objet_lieu,
    objet_date: req.body.objet_date,
  };

  TroovModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});


//suppression d'un objet selon son id passé en parametre
router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
    TroovModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

//Inscription d'un utilisateur
router.post('/register', async (req, res) => {


 try{
    const {login, email, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new TroovModel({
      login: login,
      email: email,
      password: hash,
    });

    const post = await user.save((err, docs) => {
      if (!err) res.send(docs);
      else console.log('Error creating new data : ' + err);
    })
    res.status(200).json("All good");
  }
  catch(e){
    console.log(e);
    res.status(500).send("Something broke!")
  }


});

//login pour l'utilisateur
router.post('/login', async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await TroovModel.findOne({email});

    if(user){
      const validPass = await bcrypt.compare(password, user.hash);
      if(validPass){
        res.status(200).json('valid email and pass!');
      } else{
        res.json("wrong pass");
      }
    }else{
      res.status(404).json('user not found!');
    }
  }catch(e){
    console.log(e);
    res.status(500).send('something broke!');
  }


 
})

module.exports = router;