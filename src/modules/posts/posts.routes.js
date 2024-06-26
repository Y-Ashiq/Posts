import Router from "express";
import posts from "./posts.controller.js";

const postRouter = Router();

postRouter.route('/posts').post(posts.addPosts).get(posts.getAllposts)
postRouter.route('/posts/:id').get(posts.getPostOfUser)

export default postRouter