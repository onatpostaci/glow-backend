import mongoose from "mongoose";
import User from "../models/user.js";

let users = [];

export const getUsers = async (req, res)=> {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error){
        return res.status(404).json( { message: error.message } );
    }
};

export const createUser = async (req, res) =>{
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        return res.status(201).json(newUser);
    }catch(error){
        return res.status(409).json( { message: error.message } );
    }
 };

 export const getUserById = async (req, res) =>{
    const { id } = req.params; 
    try {
        const uniqueUser = await User.findById(id);
        return res.status(200).json(uniqueUser);
    }catch (error){
        return res.status(404).json( { message: error.message } );
    }
};

export const deleteUser = async ( req , res ) => {
    const { id } = req.params; 
    const user = req.body;
    console.log(user);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post user that ID.");
    await User.findByIdAndRemove(id);
    return res.json( { message: "User Deleted Succesfully!" } );
};

export const updateUser = async ( req , res ) => {
    const { id: _id } = req.params; 
    const user = req.body;
    console.log(user);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No user with that ID.");

    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id }, { new: true });
    
    return res.json(updatedUser);
};

export const checkUser = async ( req , res ) => { 
    const userInfo = req.body;
    //console.log(userInfo);

    const uniqueUser = await User.find( { "email": userInfo.email, "password": userInfo.password } );
    console.log(uniqueUser)
    if(!(uniqueUser.length===0)){
        return res.status(200).json(uniqueUser);
    }
    else{
            return res.status(200).json(uniqueUser);
    }
}
    