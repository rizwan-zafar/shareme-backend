const express = require("express")
const mongoose = require("mongoose")
const VideoRoute = require("./routeController/videos")
const app = express()
app.use(express.json())

// connect with monogdb
const connection_Url = "mongodb+srv://rizwanzafar:fqbQ4QQgz3EMS01d@cluster0.ysnrolt.mongodb.net/ShareMe_db?retryWrites=true&w=majority"
mongoose.connect(connection_Url);
const con = mongoose.connection;
con.on('open', () => {
    console.log("Connected");
})
// end connect with mongodb



app.get("/", async (req, resp) => {
    resp.send("Smoke Test Successful for ShareMe Project")
})

// middleware
app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Headers', '*')
    next();
})
app.use("/shareme/api/v1", VideoRoute)

app.listen(2000, () => {
    console.log("ShareMe NodeServer Started")
})