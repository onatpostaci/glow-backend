//requiring express package to start the program in a port
import express from 'express';
const router = express.Router();
import {getPosts, createPost, getPostById, updatePost, deletePost, likePost} from '../controllers/posts.js'

//all routes here are starting with /posts

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);



export default router;