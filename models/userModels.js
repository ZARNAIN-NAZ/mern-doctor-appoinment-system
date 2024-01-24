// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
// name: {
//     type: String,
//     required: [true , 'name is require'],
// },
// email:{
//     type:String,
//     required: [true , 'email is require'],
// },
// password:{
//     type:String,
//     required: [true , 'password is require'],
// }
// })
// const userModel =  mongoose.Model('users' , userSchema);

// module.exports=userModel



// =========================================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
name: {
    type: String,
    required: [true , 'name is require'],
},
email:{
    type:String,
    required: [true , 'email is require'],
},
password:{
    type:String,
    required: [true , 'password is require'],
}
})
const userModel =  mongoose.model('users' , userSchema);

module.exports=userModel