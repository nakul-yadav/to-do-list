const express=require('express');
const controller=express.Router();
const User=require('../models/toDoUser')
let globalEmail="hii";



controller.post('/login',async(req,res)=>{
const{email,password}=req.body;
console.log(email);
globalEmail=email;
const user=await User.findOne({email:email}).exec()
if(user.email===email&&user.password===password){
    return res.send("hii")
}
else{
  res.send(false);
}

})


controller.post('/signup',async(req,res)=>{
     const name=req.body.naam;
     console.log(name)
     const password=req.body.password;
     const email=req.body.email
    const user=new User({naam:name,email:email,password:password});
    await user.save();
    res.redirect('localhost:3000');
    })

   
    controller.post('/addtask',async(req,res)=>{
        
        const{id,value,email}=req.body;
        const d= await User.findOneAndUpdate({ email:email }, 
            { $push: { data: {id:id,value:value} } });
        res.json({"value":"done"})
    })

    controller.post('/updatetask',async(req,res)=>{
        
        const{id,task,email}=req.body;
        const user=await User.findOne({email:email}).exec()
        const previousTask=user.data;
        const updateData=previousTask.map((item)=>{
            if(item.id===id){
                return {
                    id:id,
                    value:task
                }
            }
            else{
                return item
            }
        })
    

        
        //let key = Object.keys(dataChange).find(k=>dataChange[k]===actualdata);
      
        const d= await User.findOneAndUpdate({ email:email }, 
            {"$set": { data: updateData }});
        res.json({"value":"done"})
    })

    controller.post('/deletetask',async(req,res)=>{
        
        const{id,email}=req.body;
        const user=await User.findOne({email:email}).exec()
        const previousTask=user.data;
        const updateData=previousTask.filter((item)=>item.id!=id);
    

        
        //let key = Object.keys(dataChange).find(k=>dataChange[k]===actualdata);
      
        const d= await User.findOneAndUpdate({ email:email }, 
            {"$set": { data: updateData }});
        res.json({"value":"done"})
    })



    controller.get('/addtask',async(req,res)=>{
        const user= await User.findOne({ email:globalEmail})
        res.json({userData:user});
    })


module.exports=controller;