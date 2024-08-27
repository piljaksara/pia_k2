import express from 'express'
import { UserController } from '../controllers/user.controller';
import user from '../models/user';
const userRouter=express.Router();

userRouter.route('/login').post(//prihvatam samo post zahtev ka ruti login
    (req,res)=>new UserController().loogin(req,res) //zahtev obradjuje nas kontroler 
)

userRouter.route('/register').post(
    (req,res)=>new UserController().register(req,res)
)
export default userRouter;