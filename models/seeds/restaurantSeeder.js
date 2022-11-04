const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant') // 載入 restaurant model
const User = require('../user')
const db = require('../../config/mongoose')
const restaurantList = require('../../restaurant.json').results// 載入種子json
const seedUser = 
  { name: '昱欣寶寶',
    email: 'modelUser@example.com',
    password: '12345678',   
  
  }

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(seedUser.password, salt))
    .then(hash => User.create({
      name: seedUser.name,
      email: seedUser.email,
      password: hash
    }))
  
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 8 },
        (_, i) => Restaurant.create({ name: restaurantList[i].name, 
          name_en: restaurantList[i].name_en, 
          category: restaurantList[i].category, 
          image: restaurantList[i].image, 
          location: restaurantList[i].location, 
          phone: restaurantList[i].phone, 
          google_map: restaurantList[i].google_map, 
          rating: restaurantList[i].rating, 
          description: restaurantList[i].description, 
          userId })
      ))
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
  })