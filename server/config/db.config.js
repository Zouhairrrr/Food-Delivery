const mongoose = require('mongoose');


const db = async (url) => {

    await mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connect to MongoDB.");
        })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });
}


module.exports = db;
