import express from "express";
import mongoose from "mongoose"
import VideoRoute from "./routeController/videos.js"
const app = express()
app.use(express.json())

// mongodb+srv://rizwanzafar:w1mdNi5kzaw0DNub@cluster0.rapbj2x.mongodb.net/?retryWrites=true&w=majority
// connect with monogdb
const connection_Url = "mongodb+srv://rizwanzafar:RRvuaqI5E4mM20Gf@cluster0.p9my2gr.mongodb.net/Share_Me?retryWrites=true&w=majority"
mongoose.connect(connection_Url,{}).then(()=>{ 
    console.log("Database Connected")
}).catch((e)=>{console.log("database error " +e)})
 
 
// const con = mongoose.connection;
// con.on('open', () => {
//     console.log("Connected");
// })
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

app.listen(process.env.PORT || 2000, () => {
    console.log("ShareMe NodeServer Started")
})