// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Restaurant = require('../../models/restaurant')

//搜尋餐廳
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find({})
    .lean()
    .then(restaurantsData => {
      const filterRestaurants = restaurantsData.filter(restaurant => {
        return restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name.includes(keyword) || restaurant.category.includes(keyword)
      })

      res.render('index', { restaurantsData: filterRestaurants, keyword: keyword })
    })
    .catch(err => console.log(err))
})
// 匯出路由模組
module.exports = router