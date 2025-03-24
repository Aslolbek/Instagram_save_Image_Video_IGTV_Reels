const express = require("express")
const {StartBot} = reuquire('./server.js')
const app = express()
app.use(StartBot())
app.listen(2000, ()=>{
    console.log(`2000 portni kuzatmoqda!...`)
})