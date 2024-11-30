const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema=new mongoose.Schema({
    
      id:{type:Number,default:1},
      value:{type:String,default:"hii"}

    
})

const userSchema = new mongoose.Schema({
  naam: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  data:[
    {
    id:Number,
    value:String
    }
  ]
});

 


const User = mongoose.model('User', userSchema);

module.exports = User;