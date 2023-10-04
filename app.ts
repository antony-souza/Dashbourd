import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { DataBase } from './mongodb'
import { ICreateUserDB } from './UserCreateMiddleware'
import { ICheckUserExist,IVerificationUser } from './UserCreateMiddleware'
import { port, portMsg } from './variablesGlobal'
import { IUserDeleteMiddleware } from './UserDeleteMiddleware'
import { json } from 'stream/consumers'

dotenv.config()
const app = express()
app.use(express.json());
app.use(cors())
DataBase()

app.get('/',(req,res)=>{
  res.status(200).json({msg:'Bullshit'})
})
app.post('/register', ICheckUserExist,IVerificationUser,ICreateUserDB)
app.delete('/delete/:id', IUserDeleteMiddleware)

app.listen(port, ()=>{
  console.log(portMsg)
})