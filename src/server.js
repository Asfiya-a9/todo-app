const express = require("express");
require("./db");
const TodoRouter = require("./routes/todo.routes");

const app = express();

app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.get("/",(req , res ) => {
    return res.sendFile(__dirname+"/public/index.js")
})

app.use("/api/todos", TodoRouter);

module.exports = app;