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
    }
}
exports.UserController = UserController;
