"use strict";
// methods for generating and verifying JWTs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    generateToken(data, expiresIn) {
        return jsonwebtoken_1.default.sign(data, this.secretKey, { expiresIn });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secretKey);
    }
}
exports.JWTService = JWTService;
