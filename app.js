// 載入專案需要用到的框架和工具包(Packages) 
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
//載入restaurant 資料庫
const Restaurant = require('./models/restaurant.js')
//設定資料庫連線(但為什麼是在這裡連線??)
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// 引用路由器
const routes = require('./routes')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})
//設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
//這是設定啥
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})


