# 🏕 YelpCamp

<a href="https://my-campground.herokuapp.com/">
 <p align="center">
  <img src="https://res.cloudinary.com/djbpt4sgk/image/upload/v1654438007/Main_unje6g.png" alt="Campground"
 </p>
</a>

<p><b>YelpCamp</b> is a website where users can create and comment on camping locations. You must have an account to create or comment. The project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used for authentication.</p>

## Run locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and code

```
git clone https://github.com/TatianaUrbanovych/yelp-camp-2022-knute.git
cd yelp-camp-2022-knute
npm install
```
## Created with

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

<p>Create a new .env file in the root folder and add the following:</p>

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.

Then go to [localhost:3000](http://localhost:3000/).

This project was part of Colt Steele's web dev course on udemy.
