'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res); //true
    });
  });


//END_ASYNC

//START_SYNC



//END_SYNC



























app.get('/',(req,res) =>{
    res.send('Understand BCrypt Hashes');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
