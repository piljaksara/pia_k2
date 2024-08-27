"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post(//prihvatam samo post zahtev ka ruti login
(req, res) => new user_controller_1.UserController().loogin(req, res) //zahtev obradjuje nas kontroler 
);
exports.default = userRouter;
