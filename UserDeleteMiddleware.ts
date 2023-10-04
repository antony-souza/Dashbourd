import { User } from "./UserSchema"


export async function IUserDeleteMiddleware(req,res){
    const {id} = req.params;

    try{
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({msg:'User not found!'})
        }

        await user.deleteOne({_id:id})

        res.status(200).json({msg:'User delete successfully!'})
    }
    
    catch(error){
        console.log(error)
        res.status(500).json({msg:'Error delete user!'})
    }
};
