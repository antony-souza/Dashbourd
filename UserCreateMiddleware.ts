import { User } from "./UserSchema";
import express from 'express'

export function ICheckUserExist(req,res,next){

    const {name,email,password} = req.body;
    
    if(!name || !email || !password){
      return res.status(422).json({msg:'Faltando nome, email ou senha!'});
    }
    next()
}

export async function IVerificationUser(req,res,next){

    const {email} = req.body;
    const verificationUser = await User.findOne({email:email})
    if(verificationUser){
        return res.status(422).json({ msg: 'Usuário já existe' });
    }
    next()
}

export async function ICreateUserDB(req,res){

    const {name,email,password} = req.body
    const user = new User({name,email,password})
    try{
        await user.save();
        res.status(201).json({ msg: 'Usuário criado com sucesso!' });
    }catch(error){
        res.status(500).json({ msg: 'Erro no servidor' });
    }
}

