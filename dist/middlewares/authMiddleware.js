"use strict";
// verify the authenticity of incoming requests using JSON Web Tokens (JWT)
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
function authMiddleware(jwtService) {
    return (req, res, next) => {
        var _a;
        try {
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token)
                throw new Error('Authorization token not found.');
            const decodedToken = jwtService.verifyToken(token);
            req['user'] = decodedToken; // Set the authenticated user on the request object
            next();
        }
        catch (error) {
            res.status(401).json({ error: 'Unauthorized' });
        }
    };
}
exports.authMiddleware = authMiddleware;
