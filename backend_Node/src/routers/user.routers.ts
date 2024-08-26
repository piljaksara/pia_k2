import express from 'express'
import { UserController } from '../controllers/user.controller';
const userRouter=express.Router();

userRouter.route('/login').post(//prihvatam samo post zahtev ka ruti login
    (req,res)=>new UserController().loogin(req,res) //zahtev obradjuje nas kontroler 
)
export default userRouter;