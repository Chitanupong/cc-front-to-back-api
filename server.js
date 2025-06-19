import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
const app = express();
//Basic middleware
app.use(cors()); //Allow cross domains
app.use(morgan('dev')); //Show logs
app.use(express.json()); //for read body


// http://localhost:8000
app.use('/api',userRouter)
app.use('/auth',authRouter)

//Error Headling
app.use((err,req,res,next)=>{
  console.log(err.message)
  res.status(err.status||500).json({message:err.message||"Someting Wrong"})
})

const PORT = 8000;
//start server
app.listen(PORT, () => 
  console.log(`Server is running on ${PORT}`))