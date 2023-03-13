import bcrypt from 'bcrypt';
import { CONFIG } from '../config/environment';
import jwt from 'jsonwebtoken';

export class Utility {
    static comparePasswordHash(hash: string, plainText: string) {
        return bcrypt.compareSync(plainText, hash);
    }

    static createPasswordHash(password: string) {
        let salt = bcrypt.genSaltSync(CONFIG.BCRYPT_SALT_ROUNDS);
        return bcrypt.hashSync(password, salt);
    }

    // Generate JWT token
    static generateJwtToken(userUUID: string) {
        return jwt.sign({
            id: userUUID,
        },
            CONFIG.jwt.secret,
            { expiresIn: '1d' }
        );
    }
    
}
