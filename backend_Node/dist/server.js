"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routers_1 = __importDefault(require("./routers/user.routers"));
const news_routers_1 = __importDefault(require("./routers/news.routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/pia_mean');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connectoin ok');
});
const router = express_1.default.Router();
router.use('/users', user_routers_1.default);
router.use('/news', news_routers_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
