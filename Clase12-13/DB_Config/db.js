//Mongo DB Atlas config & connect
const mongoose = require('mongoose');
const uri = process.env.db_uri

const options = {
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(uri, options, (err) => {
    err ? console.log(err) : console.log('\033[32mMongo DB + Atlas connected Ok')
})