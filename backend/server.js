const express=require('express');
const router=require('./routes/routes');
const connectDB=require('./db/db')
const controller=require('./controller/control.js')
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();



// calling databse
connectDB();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',router);
app.use('/api',controller)

app.listen('4000',()=>{
console.log('server started')
})
