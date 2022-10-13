const Restaurant = require('../restaurant') // 載入 restaurant model
const restaurantList = require("../../restaurant.json").results// 載入種子json
const db = require('../../config/mongoose')
db.once('open', () => {
  console.log("running restaurantSeeder script...")
  Restaurant.create(restaurantList)
    .then(() => {
      console.log("restaurantSeeder done!")
      db.close()
    })
    .catch(err => console.log(err))
})