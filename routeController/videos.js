// const express=require("express")
// const Video=require("../Models/dbModel")
import express from "express"
import Video from "../Models/dbModel.js"
const route=express.Router();

route.get('/',async (req,resp)=>{
    try {
        let data = await Video.find();
        resp.send(data);
    }
    catch (e) {
        resp.send("Error" + e);
    } 
})


 
route.post('/',async (req,resp)=>{
    
    const newVideo=req.body;
    const video=new Video(newVideo);
    try {
        let savedData = await video.save();
        resp.json(savedData);
    }
    catch (e) {
        resp.send("Error " + e)
    }
  
   
})


export default route