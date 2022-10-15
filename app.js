// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
// 引用路由器
const routes = require('./routes')
require('./config/mongoose')
// 設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// 這是設定啥
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})
