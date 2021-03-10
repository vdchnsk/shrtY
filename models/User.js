const {Schema , model, Types} = require("mongoose")

//схема объектов коллекции
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

//Монго создает коллекцию с имением из первого вргумента,дабвляет к окончанию "s".К примеру ,если изменить "User" на любое другое название,то при подклбчении к бд,автоматически создастся новая коллекция с соответсвующем названием во множественном числе * странно как-то
module.exports = model("User", schema) 