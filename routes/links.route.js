const {Router} = require('express')
const shortid = require("shortid")
const Link = require("../models/Link")
const authMiddleware = require("../middleware/auth.middleware.js")
const config = require("config")


const router = Router()

router.post(
    '/cut', authMiddleware, //authMiddleware - middleware , который декодирует jwt и отправляет нам id , в противном случае выдает ошибку о том, что jwt нет
    async(req, res) => {
        console.log("got here")
        try{
            const baseUrl = config.get('baseUrl')

            const {from} = req.body
  
            const uniqueCode = shortid.generate() //ShortId creates amazingly short non-sequential url-friendly unique id's

            const existing = await Link.findOne({ from })
            if (existing){
                return res.json({link: existing})
            }
            const to = baseUrl + '/to/' + uniqueCode

            const link = new Link({
                uniqueCode , to , from , owner:req.user.userId
            })
            await link.save()
            res.status(201).json({link}) // объект по схеме Link

        } catch (e){
            res.status(500).json({message:"Что-то пошло не так,попрбуейте снова..." })
        }
    }
)

router.get(
    "/", authMiddleware,
    async (req, res) => {
        try{
            const link = await Link.find({ owner: req.user.userId}) // делаем запрос в бд и ищес все ссыдкт принадлежазщие юзеру с id из jwt , читатй выше
            res.json(link) // возвращаем link в json

        } catch (e){
            res.status(500).json({message:"Что-то пошло не так,попрбуейте снова..." })
        }
    }
)

router.get(
    "/:id", authMiddleware ,
    async (req, res) => {
        try{
            const link = await Link.findById(req.params.id)
            res.json(link) // возвращаем link в json

        } catch (e){
            res.status(500).json({message:"Что-то пошло не так,попрбуейте снова..." })
        }
    }
)

module.exports = router