"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const news_1 = __importDefault(require("../models/news"));
class NewsController {
    constructor() {
        this.getAllNews = (req, res) => {
            news_1.default.find({}, (err, news) => {
                if (err)
                    console.log(err);
                else
                    res.json(news);
            }); //find vraca sve a {} bez uslova
        };
        this.addComment = (req, res) => {
            let id = req.body.id;
            let commentText = req.body.comment;
            news_1.default.findOne({ 'id': id }, (err, news) => {
                if (err)
                    console.log(err);
                else {
                    if (news) {
                        let comment = {
                            text: commentText
                        };
                        news_1.default.collection.updateOne({ 'id': id }, { $push: { 'comments': comment } });
                        res.json({ 'message': 'ok' });
                    }
                    else
                        res.json({ 'message': 'err' });
                }
            });
        };
        this.searchNews = (req, res) => {
            let searchParam = req.query.param;
            news_1.default.find({ 'caption': { $regex: searchParam } }, (err, news) => {
                if (err)
                    console.log(err);
                else
                    res.json(news);
            });
        };
        this.delete = (req, res) => {
            let id = req.body.id;
            news_1.default.deleteOne({ 'id': parseInt(id) }, (err, news) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.update = (req, res) => {
            let id = req.body.id;
            let newCaption = req.body.caption;
            news_1.default.collection.updateOne({ 'id': parseInt(id) }, { $set: { 'caption': newCaption } });
            res.json(id);
        };
    }
}
exports.NewsController = NewsController;
