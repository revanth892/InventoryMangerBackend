const {Users,User_profiles}=require('../models/Associations');
const usercontroller ={
    createUser: async(req,res,next)=>{
        const {username,password,fullname,bio}=req.body;
        console.log(username,password);
        try{ 
            const User=await Users.create({
                username,
                password,
            });
            const Profile= await User_profiles.create({
                fullname,
                bio,
                UserId: User.id
            })

            return res.status(200).json({message:"user creation success"});
        }
        catch(err)
        {
            return res.status(400).json({message: err.message,error: "error creating user"})
        }
    }
}

module.exports=usercontroller;

