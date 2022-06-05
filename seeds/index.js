const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)]


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author: '626fd083017816944fe535d9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            //    image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus saepe et, quisquam perspiciatis vero animiquibusdam provident iste recusandae harum aspernatur eveniet enim non laboriosam vel.Sit, sed suscipit.Nisi consequuntur perspiciatis facilis rerum sed aliquam vero velit assumenda, dolor, aliquid, quae eveniet nammagnam quos vitae quasi? Aut deserunt maxime labore libero culpa itaque ratione sapiente sunt facilis!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/djbpt4sgk/image/upload/v1651767090/YelpCamp/qtfrwhl0wmzsob1crdnk.jpg',
                    filename: 'YelpCamp/qtfrwhl0wmzsob1crdnk.jpg'
                },
                {
                    url: 'https://res.cloudinary.com/djbpt4sgk/image/upload/v1651767090/YelpCamp/ick758dfx3zjirakxlby.jpg',
                    filename: 'YelpCamp/ick758dfx3zjirakxlby.jpg'
                }
            ]
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
})