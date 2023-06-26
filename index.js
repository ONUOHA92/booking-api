const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { application } = require('express');
const user = require('./routes/user').router


require('dotenv').config()


const app = express()
app.use(bodyParser.json());




app.use(cors({ origin: '*' }));



//test api  at /api/user/text
app.use("/api/user", user);


//to test nodejs app

app.get('/', (req, res) => {
    res.send('Hello Backend is running for hotel api');
})



//db config
const mongoURL = process.env.MONGODB_URL



// const port = 5000;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
}).catch((err) => {
    console.log(err.message + "000 errrrror")
})


app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`, 'mongodb connected')
})

module.exports = app



