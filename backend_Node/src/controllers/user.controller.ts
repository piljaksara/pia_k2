import * as express from 'express'
import User from '../models/user'

export class UserController{
    loogin = (req:express.Request, res:express.Response)=>{//primamo req od fronta, response vracamo    
        let username=req.body.username;//skrivenije podatke stavljamo u body, post zahtev
        let password= req.body.password;//uzimamo ih iz tela zahteva

        User.findOne({ 'kor_ime': username, 'lozinka': password}).then(user=>{
            res.json(user)
        }).catch(err=>{
            console.log(err)
        })
    }

    register =(req:express.Request, res:express.Response)=>{
        let user= new User({firstname:req.body.firstname, lastname:req.body.lastname,
            username:req.body.username, password:req.body.password, type:req.body.type
            //let user = new User(req.body)
        })
        user.save().then(user=>{
            res.status(200).json({'message':'user added'})
        }).catch(err=>{
            res.status(400).json({'message': 'error'})
        })
        //insertovace ga u tabelu sa save
    }
}