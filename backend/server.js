const express=require('express');
const router=require('./routes/routes');
const connectDB=require('./db/db')
const controller=require('./controller/control.js')
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();
const port=process.env.PORT||4000;


// calling databse
connectDB();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',router);
app.use('/api',controller)

app.listen(port,()=>{
console.log('server started')
})
