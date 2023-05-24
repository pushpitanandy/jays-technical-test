// methods for generating and verifying JWTs

import jwt from 'jsonwebtoken';

export class JWTService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  generateToken(data: any, expiresIn: string): string {
    return jwt.sign(data, this.secretKey, { expiresIn });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secretKey);
  }
}
