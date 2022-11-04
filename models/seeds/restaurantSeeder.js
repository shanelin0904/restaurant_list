const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant') // 載入 restaurant model
const User = require('../user')
const db = require('../../config/mongoose')
const restaurantList = require('../../restaurant.json').results// 載入種子json
const seedUser = [
  {
    name: '範例1',
    email: 'user1@example.com',
    password: '12345678',
    restaurantIndex: [0, 1, 2]
  },
  {
    name: '範例2',
    email: 'user2@example.com',
    password: '12345678',
    restaurantIndex: [3, 4, 5]
  }
]

db.once('open', () => {
  return Promise.all(
    seedUser.map((user) => {
      const { name, email, password, restaurantIndex } = user
      return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      }).then((user) => {
        const restaurants = restaurantIndex.map((index) => {
          const restaurant = restaurantList[index]
          restaurant.userId = user._id
          return restaurant
        })
        return Restaurant.create(restaurants)
      })
    })
  )
    .then(() => {
      console.log('Restaurant list seeders already created !')
      process.exit()
    })
    .catch((error) => console.log(error))
})