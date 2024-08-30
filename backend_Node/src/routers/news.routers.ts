import express from 'express'
import { NewsController } from '../controllers/news.controller';

const newsRouter=express.Router();

newsRouter.route('/getAllNews').get(
    (req,res)=>new NewsController().getAllNews(req,res)
)

newsRouter.route('/addComment').post(
    (req,res)=>new NewsController().addComment(req,res)
)

newsRouter.route('/search').get(
    (req,res)=>new NewsController().searchNews(req,res)
)


newsRouter.route('/delete').post(
    (req,res)=>new NewsController().delete(req,res)
)

newsRouter.route('/update').post(
    (req,res)=>new NewsController().update(req,res)
)

export default newsRouter;