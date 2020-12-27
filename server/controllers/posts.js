import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/makePost.js';
const router = express.Router();

export const getAllPosts = async (req, res)=> {
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({message: error.message});        
    }
}

export const updatePost = async (req, res) => {
    const {id:_id} = req.params;
    const post = req.body; //comes from frontend
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id')
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});  //postmessage is a model
    res.json(updatedPost);
}