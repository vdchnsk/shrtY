const {Router} = require("express")
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const {check, validationResult, body} = require("express-validator")
const User = require("../models/User")


const router = Router() //маршрутизатор express

//Endpoints

// /api/auth/register
router.post( //так приложение отвечает на post-запрос
    '/register',
    [
        check("email","Некорректный email").isEmail(), //проверка emal,в случае чего,выдается оишбка из 2-го аргумента.IsEmail - встроенный валидатор в либе express-validatorб
        check("password","Минимальная длина пароля - 6 символов").isLength({min:6}),
    ],
    async (req, res)=>{ //конкатенируем /api/auth/ с register
        try {
            const errors = validationResult(req)
            //вывод ошибок
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message:"Некорректные данные при регистрации"
                })
            }

            const {email, password} = req.body

            const condidate = await User.findOne({email})

            if (condidate){
                return res.status(400).json({messag:"такой пользователь уже сущестует"})
            }

            const hashedPassword = await bcrypt.hash(password, 12) //хэщируем пароль

            const user = new User({
                email:email,
                password:hashedPassword
            })
            
            await user.save() //добавление нового юзера
            res.status(201).json({message:"Пользьователь создан"})
        }catch (e){
            res.status(500).json({message:"что-то пошло не так,попрбуейте снова..." })
        }
})

//конкатенируем /api/auth/ с login
router.post('/login', 
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password','Введите пароль').exists()
    ],
    async (reg, res)=>{

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"Некорректные данные при авторизации"
            })
        }
    const {email,password} = req.body
    const user = await User.findOne({email})

    if (!user){
        return res.status(400).json({message:"такого пользвователя не существует!"})
    }
    
    const isMatch = await bcrypt.compare(password , user.password)//сравнение введенного пользователем пароля с имеющимся в бд 
    if (!isMatch){
        return res.status(400).json({message:"Неверный пароль!"})
    }
    
    //формирование jwt
    const JsonWebToken = jwt.sign({userId:user.id}, config.get('jwtSecret'),  {expiresIn: '1h'}) //параметры: 1)данные,которые шифруем 2)секретный ключ для шифровки 3)время жизни токена
    //ответ юзеру
    res.status(200).json({JsonWebToken, userId:user.id})

    } catch (e){
        res.status(500).json({message:"что-то пошло не так,попрбуейте снова..." })
    }
})


module.exports = router