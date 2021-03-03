const {Schema , model, Types} = require("mongoose")


const schema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,  //unique:true,поскольку почта не может повторяться
    },
    password:{
        type:String,
        requiered:true
    },
    alreadyCutLinks:[{
        type: Types.ObjectId,
        ref:"Link" 
    }],

})

module.exports = model("User", schema) //экспорт модуль schema как "User"