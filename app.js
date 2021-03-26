const express = require("express")
const config = require("config")
const mongoose = require('mongoose')


const app = express()

app.use(express.json({ extended:true }))

app.use("/api/auth", require("./routes/auth.route"))
app.use("/api/link", require("./routes/links.route"))
app.use("/t", require("./routes/redirect.route"))

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoUrl'),{ //пожключение к бд ,с помощью ссылки из конфига
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        app.listen(PORT, () => console.log('\x1b[34m', `backend app started on port ${PORT}...` )) //слушате соединение на порте 5000 и заупск сервера на 5000 хотсе
    }catch (e){
        console.log('Server error:', e.message)
        process.exit(1) // выход в случае ошибки
    }
}

start()