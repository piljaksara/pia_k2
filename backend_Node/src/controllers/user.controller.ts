import * as express from 'express'
import User from '../models/user'

export class UserController{
    loogin= (req:express.Request, res:express.Response)=>{//primamo req od fronta, response vracamo    
        let username=req.body.username;//skrivenije podatke stavljamo u body, post zahtev
        let password= req.body.password;//uzimamo ih iz tela zahteva

        User.findOne({'username':username, 'password':password}, (err: any,user: any)=>{
            if(err)console.log(err);
            else res.json(user);
        })
    }
}