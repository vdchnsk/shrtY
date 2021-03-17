const jwt = require("jsonwebtoken")
const config = require("config")


module.exports = (req, res, next) =>{
    if (req === "OPTIONS") { //req === "OPTIONS" позволяет проверить , досутпн сервер или нет
        return next()
    }

    try {
        const token = req.headers.authorization.splt("")[1] // забираем первый элемент из массива (токен)\
        if (!token){
            res.status(401).json({message:"Нет токена!"})
        }
        const decoded = jwt.verify(token , config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message:"Нет авторизации!"})
    }
}