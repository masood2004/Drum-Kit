const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');



const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required! Please Specify the Name."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 8,
    review: "Amazing.",
});

pineapple.save();

const apple = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty Solid as a Fruit."
});

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "Best Fruit"
});

const orange = new Fruit ({
    name: "orange",
    score: 8,
    review: "Good Fruit"
});

const banana = new Fruit ({
    name: "Banana",
    score: 10,
    review: "Amazing Fruit"
});


// mongoose.connection.close();
// // Fruit.insertMany([kiwi, orange, banana]);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});


const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37,
});

Person.updateOne({name: "John"}, {favoriteFruit: pineapple})


person.save();

// Fruit.deleteOne({ _id: "647a3f86fdf20966a2440fd8"}, {name: "Apple"});

// fruit.save();


// // const Cat = mongoose.model('Cat', { name: String });

// // const kitty = new Cat({ name: 'Zildjian' });
// // kitty.save().then(() => console.log('meow'));