import express from 'express';
import {getAllPosts, createPost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/', createPost);

export default router;