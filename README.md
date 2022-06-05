# 🏕 YelpCamp

<a href="https://my-campground.herokuapp.com/">
 <p align="center">
  <img src="https://res.cloudinary.com/djbpt4sgk/image/upload/v1654438007/Main_unje6g.png" alt="Campground"
 </p>
</a>

YelpCamp - це вебсайт, за допомогою якого користувачі можуть створювати та коментувати локації для кемпінгу. Для створення або коментування необхідно мати аккаунт.
Проект було створено використовуючи Node.js, Express, MongoDB, та Bootstrap. Для аутентифікації було використано Passport.js.

## Запустити локально
1. Встановіть [mongodb](https://www.mongodb.com/)
2. Створіть cloudinary аккаунт для того, щоб отримати API ключ та код

```
git clone https://github.com/TatianaUrbanovych/yelp-camp-2022-knute.git
cd yelp-camp-2022-knute
npm install
```
## Створено за допомогою

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

Створіть новий .env файл у кореневій папці та додайте наступне:  

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Запустіть ```mongod``` в іншому терміналі та ```node app.js``` в терміналі з проектом.  

Далі перейдіть до [localhost:3000](http://localhost:3000/).

This project was part of Colt Steele's web dev course on udemy.  
