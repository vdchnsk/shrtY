const {Schema , model, Types} = require("mongoose")

//схема объектов коллекции
const schema = new Schema({
    from:{
        type:String,
        required:true,
        unique:true
    },
    to:{
        type:String,
        requiered:true,
    },
    uniqueCode:{
        type: String,
        requiered:true,
        unique:true,
    },
    date: {
        type: Date,
        default:Date.now
    },
    numberOfCLicks: {
        type: Number,
        default:0
    },
    owner:{
        type: Types.ObjectId,
        ref:"User"
    }
})

//Монго создает коллекцию с имением из первого вргумента,дабвляет к окончанию "s".К примеру ,если изменить "User" на любое другое название,то при подклбчении к бд,автоматически создастся новая коллекция с соответсвующем названием во множественном числе * странно как-то
module.exports = model("Link", schema) 