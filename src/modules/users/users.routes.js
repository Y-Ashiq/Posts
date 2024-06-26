import Router from "express";
import controller from "../users/users.controller.js"
import { checkUser } from "../../middleware/checkEmail.js";

const userRouter = Router();


userRouter.post('/signUp',checkUser,controller.signUp)
userRouter.post('/signIn', controller.signIn)

export default userRouter