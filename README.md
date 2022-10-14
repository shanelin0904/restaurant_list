![MyImage](https://scontent.ftpe3-1.fna.fbcdn.net/v/t39.30808-6/310108649_5494636220631345_2144659569944538085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=xWVhSlHgMSsAX_4XbPr&_nc_ht=scontent.ftpe3-1.fna&oh=00_AT974Fh5GotM0Dz-Y5fvIzQz4d8Yym7OnIMoxAZpyVhmHw&oe=634E7D05)
# Restaurant_list
This is a simple restaurant list for Taipei Foodie
##  Dependency
This project is build by: 
* node.js: 14.16.0 
* nodemon: 2.0.20 bootstrap: 
* 4.3.1 express: 4.16.4 
* express-handlebars: 3.0.0 
* body-parser: ^1.20.1 
* mongoose: ^5.9.7 
* method-override: ^3.0.0
##  Features
1.Index Page: user can see all restaurants on index page, includes:
 * photo of restaurant
 * name of restaurant
 * catagory of restaurant
 * rate of restaurant


2.User can click 詳細資訊(details) to see further details, includes:
 * catagory
 * address
 * phone number
 * simple description of restaurant
 * photo
 
 3.User can click 編輯(edit) to see change details, includes:
 * catagory
 * address
 * phone number
 * simple description of restaurant
 * photo
 
 4.User can click trashcan icon to delete the restaurant above
 
 5.User can create a restaurant and its details

## Enviroment setup
Node.js
## Start this Project
### Before you get started,make sure you've already installed node.js and npm
1.Open your Terminal
```
git clone 
```
2.change directory to resraurant_list

3.enter following command in your terminal
```
npm install https://github.com/shanelin0904/restaurant_list
```
4.after installation, enter following command in your terminal
```
npm run seed
```
5.check following message is shown on terminal
```
running restaurantSeeder script...
restaurantSeeder done!
```
6.after that, enter following command in your terminal
```
npm run dev
```

7.check following message is shown on terminal
```
Express is listening on localhost:3000
mongodb connected!
```
8.open your browser and type http://localhost:3000 on url input

9.if you want to stop service, please press ctrl+c/command+c on your terminal
