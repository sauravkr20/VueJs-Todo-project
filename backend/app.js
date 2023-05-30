const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
    // set up the cors here 
    res.header("Access-Control-Allow-Origin", "*");
    // Cors which methods are we going to use 
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    // 
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const uri = "mongodb+srv://sauravchhimpa1:Saurav%40123@cluster0.sscy9wd.mongodb.net/?retryWrites=true&w=majority";

// connect to mongoose db 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Db Connected");
    })
    .catch(err => console.log(err));


app.use(bodyParser.json());

// routes 
app.get("/", (req, res) => {
    res.send("yay home page");
});


const TodosRoute = require('./routes/Todos')
app.use('/todos', TodosRoute)

app.listen(3000, () => {
    console.log("Listening at port 3000");
});
