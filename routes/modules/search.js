// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Restaurant = require('../../models/restaurant')
const sorting = require('../../utilities/sort')
// 搜尋餐廳
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const sortingType = req.query.sort
  const typeObject = {
    isOne: sortingType === '1',
    isTwo: sortingType === '2',
    isThree: sortingType === '3',
    isFour: sortingType === '4'
  }
  Restaurant.find({})
    .lean()
    .sort(sorting(sortingType))
    .then(restaurantsData => {
      const filterRestaurants = restaurantsData.filter(restaurant => {
        return restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name.includes(keyword) || restaurant.category.includes(keyword)
      })
      res.render('index', { restaurantsData: filterRestaurants, keyword, typeObject })
    })
    .catch(err => console.log(err))
})
// 匯出路由模組
module.exports = router
