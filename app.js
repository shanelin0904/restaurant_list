// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
// 載入restaurant 資料庫
const Restaurant = require('./models/restaurant.js')
// 連線資料庫
require('./config/mongoose')
const methodOverride = require('method-override')

// 引用路由器
const routes = require('./routes')

// 設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// 這是設定啥
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
