import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String}
});
  
//faz criar o modelo de Schema no db
export const User = mongoose.model('Teste', userSchema)

