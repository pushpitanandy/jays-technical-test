"use strict";
// error handling middlewaare
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorHandler_1 = require("../utils/errorHandler");
function errorMiddleware(error, req, res, next) {
    if (error instanceof errorHandler_1.CustomError) {
        res.status(400).json({ error: error.message });
    }
    else {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.errorMiddleware = errorMiddleware;
