"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.loogin = (req, res) => {
            let username = req.body.username; //skrivenije podatke stavljamo u body, post zahtev
            let password = req.body.password; //uzimamo ih iz tela zahteva
            user_1.default.findOne({ 'kor_ime': username, 'lozinka': password }).then(user => {
                res.json(user);
            }).catch(err => {
                console.log(err);
            });
        };
        this.register = (req, res) => {
            let user = new user_1.default({ firstname: req.body.firstname, lastname: req.body.lastname,
                username: req.body.username, password: req.body.password, type: req.body.type
            });
            user.save().then(user => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
            //insertovace ga u tabelu sa save
        };
    }
}
exports.UserController = UserController;
