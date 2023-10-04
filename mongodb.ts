import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { mongoDB } from './variablesGlobal';
dotenv.config()

export async function DataBase(){
    
    try{
        await mongoose.connect(mongoDB)
        console.log('MongoDB conectadokkkkk')

    }catch(err){
        console.error('Deu erro manokkkkk:',err)
    }
}
