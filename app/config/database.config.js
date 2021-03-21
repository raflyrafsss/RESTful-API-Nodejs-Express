const mongoose = require('mongoose');
require('dotenv/config');

mongoose.Promise = global.Promise;

// Connecting to Database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log("Database Not Connected", err);
    process.exit();
})