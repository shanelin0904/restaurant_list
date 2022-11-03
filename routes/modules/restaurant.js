// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 restaurant model
const Restaurant = require('../../models/restaurant')

// 進入「新增」餐廳頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增餐廳
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 查看特定餐廳
router.get('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  //這裡的id寫法有可能出bug
  Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})

// 進入「編輯」餐廳頁面
router.get('/:restaurantId/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantData => res.render('edit', { restaurantData }))
    .catch(err => console.log(err))
})

// 編輯餐廳
router.put('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.findOne({ _id, userId })
    .then(restaurantData => {
      restaurantData.name = name
      restaurantData.name_en = name_en 
      restaurantData.category = category
      restaurantData.image = image
      restaurantData.location = location
      restaurantData.phone = phone
      restaurantData.google_map = google_map
      restaurantData.rating = rating
      restaurantData.description = description
      return restaurantData.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(err => console.log(err))
})

// 刪除餐廳
router.delete('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  Restaurant.findOne({ _id, userId })
    .then(restaurantData => restaurantData.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})
// 匯出
module.exports = router
