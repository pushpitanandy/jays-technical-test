"use strict";
// configure the API routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
function createRouter(userController) {
    const router = express_1.default.Router();
    router.post('/register', userController.register.bind(userController));
    router.post('/login', userController.login.bind(userController));
    // Protected route example
    router.get('/profile', authMiddleware_1.authMiddleware, (req, res) => {
        const user = req['user'];
        res.json(user);
    });
    return router;
}
exports.createRouter = createRouter;
