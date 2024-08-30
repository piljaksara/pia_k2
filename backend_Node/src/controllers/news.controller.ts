import * as express from 'express'
import News from '../models/news'

export class NewsController{
    getAllNews= (req:express.Request, res:express.Response)=>{
        News.find({}, (err:any, news:any)=>{
            if(err)console.log(err);
            else res.json(news);
        })    //find vraca sve a {} bez uslova
    }
     addComment = (req:express.Request, res:express.Response)=>{
        let id=req.body.id;
        let commentText =req.body.comment;

        News.findOne({'id':id}, (err: any,news: any)=>{
            if(err)console.log(err);
            else{
                if(news){
                    let comment ={
                        text:commentText
                    }
                    
                    News.collection.updateOne({'id':id}, {$push: {'comments':comment}});
                    res.json({'message':'ok'})
                }
                else res.json({'message':'err'})
            }
        })
     }
     searchNews=(req:express.Request, res:express.Response)=>{
        let searchParam=req.query.param;

        News.find({'caption':{$regex:searchParam}}, (err: any,news: any)=>{
            if(err)console.log(err);
            else res.json(news);
        })
     }


     delete=(req:express.Request, res:express.Response)=>{
        let id=req.body.id;

        News.deleteOne({'id':parseInt(id)}, (err: any,news: any)=>{
            if(err)console.log(err);
            else res.json({'message':'ok'});
        })
     }


     update=(req:express.Request, res:express.Response)=>{
        let id=req.body.id;
        let newCaption=req.body.newCAPTION;
        News.collection.updateOne({'id':parseInt(id)},{$set:{'caption':newCaption}});
        res.json(id);
     }
}