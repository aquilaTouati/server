
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controlers.js/posts.js';
import express from 'express';
// import auth from "../middlewares.js/auth.js"

const router2 = express.Router();
router2.get('/',getPosts);
router2.post('/', /*auth,*/ createPost);
// router2.get('/:id', getPost);
router2.patch('/:id', /*auth,*/ updatePost);
router2.delete('/:id',/*auth,*/ deletePost);
router2.patch('/:id/likePost',/*auth,*/ likePost);

export default router2;