const { connect } = require("mongoose");

const uri = "mongodb+srv://Asfiya:QT3ZERaBKapIykMB@cluster0.oef7i.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)