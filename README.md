![MyImage](https://scontent.frmq4-1.fna.fbcdn.net/v/t39.30808-6/330853492_486800560331964_1017658627730193650_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=svCiL6J1XfYAX82RV63&_nc_ht=scontent.frmq4-1.fna&oh=00_AfBu6uMeu0OZAPaoKTm1h6n4pqnrfC3S84lxF5rH9lKrZg&oe=63F4B9C5)
# Restaurant_list
This is a simple restaurant list for Taipei Foodie
##  Dependency
This project is build by: 
* node.js: 14.16.0 
* nodemon: 2.0.20 
* bootstrap: 4.3.1 
* express: 4.16.4 
* express-handlebars: 3.0.0 
* body-parser: 1.20.1 
* mongoose: 5.9.7 
* method-override: 3.0.0
* bcryptjs: 2.4.3
* connect-flash: 0.1.1
* dotenv: 8.2.0
* passport: 0.4.1
* passport-local: 1.0.0
* passport-facebook: 3.0.0
##  Features

1. User can sign up either with facebook or create a new account and then login/out 

2. Index Page: user can see all restaurants on index page, includes:
 * photo of restaurant
 * name of restaurant
 * catagory of restaurant
 * rate of restaurant


3. User can click 詳細資訊(details) to see further details, includes:
 * catagory
 * address
 * phone number
 * simple description of restaurant
 * photo
 
4. User can click 編輯(edit) to see change details, includes:
 * catagory
 * address
 * phone number
 * simple description of restaurant
 * photo
 
5. User can click trashcan icon to delete the restaurant above
 
6. User can create a restaurant and its details

## Enviroment setup
Node.js
## Start this Project
### Before you get started,make sure you've already installed node.js and npm
1.Open your Terminal
```
git clone https://github.com/shanelin0904/restaurant_list
```
2.Change directory to resraurant_list

3.Enter following command in your terminal to install packages required
```
npm install 
```
4.Load seeddata
```
npm run seed
```
5.After that, enter following command in your terminal
```
npm run start
```

6.Check following message is shown on terminal
```
Express is listening on localhost:3000
mongodb connected!
```
7.Open your browser and type http://localhost:3000 on url input

8.If you want to stop service, please press ctrl+c/command+c on your terminal
