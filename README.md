![MyImage](https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/313969440_5553813094713657_1124496821739972589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZdYI1ne8cekAX-1sq5m&_nc_oc=AQmeL-71vpKnTarV7EnWAy4eINn0sUSsb8epkWQleg8aowTLZucUMpDsVFoAAu67LxA&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCnicmkyXjMAbHRDWkCIfjy9D9WRUb9ggJ5z2uHpEqERw&oe=636A01EF)
![MyImage](https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/313898225_5553811321380501_1776594341944989827_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=k3iGpKQEhG0AX9piuxI&tn=6xsMAGpWMQSWvAYJ&_nc_ht=scontent-tpe1-1.xx&oh=00_AfC2COIdm4llkxz2ThbAAQ5vBsWLs-pT-uwIh2uNdVdJkA&oe=63694C30)
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
git clone 
```
2.Change directory to resraurant_list

3.Enter following command in your terminal
```
npm install https://github.com/shanelin0904/restaurant_list
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
