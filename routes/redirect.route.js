const { Router } = require('express')
const Link = require('../models/Link')

const router = Router()

router.get(
    "/:uniqueCode", // проиходит тогда,когда в ссылке появляется уникальный код (m.e. осуществляется переход по ней)
    async(req, res) => {
        try {
            const link = await Link.findOne({ uniqueCode: req.params.uniqueCode }) //ищем в бд объект с таким же уникальным кодом и получаем его св-во "from"
            if (link) {
                link.numberOfCLicks ++
                await link.save()
                return res.redirect(link.from)
            }
            res.status(404).json("Ссылка не найдена!")
        } catch (e){
            res.status(500).json({message: e.message})
        }
    })


module.exports = router