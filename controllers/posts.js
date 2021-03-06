import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res)=> {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json( { message: error.message } );
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json( { message: error.message } );
    }
};

export const getPostById = async (req, res) => {
    const { id } = req.params; 
    try {
        const uniquePostMessage = await PostMessage.findById(id);
        res.status(200).json(uniquePostMessage);
    }catch (error){
        res.status(404).json( { message: error.message } );
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params; 
    const post = req.body;
    console.log(post);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID.");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    
    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params; 
    const post = req.body;
    console.log(post);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID.");
    await PostMessage.findByIdAndRemove(id);
    res.json( { message: "Post Deleted Succesfully!" } );
};

export const likePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;
    //console.log(post);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that ID.");
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true } );
    res.json(updatedPost);
};

export const getSpecifiedPosts = async (req, res) => {
    const { partyType } = req.params; 
    try {
        const uniquePostMessages = await PostMessage.find( { "partyType": partyType } )
        res.status(200).json(uniquePostMessages);
    }catch (error){
        res.status(404).json( { message: error.message } );
    }
}; 