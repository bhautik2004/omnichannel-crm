const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : String,
    email : {type:String,unique:true},
    password : String,
    role : {type:String,default:'agent'},
},{timestamp:true});

module.exports = mongoose.model('User',UserSchema);