"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var environment_1 = require("../config/environment");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.comparePasswordHash = function (hash, plainText) {
        return bcrypt_1.default.compareSync(plainText, hash);
    };
    Utility.createPasswordHash = function (password) {
        var salt = bcrypt_1.default.genSaltSync(environment_1.CONFIG.BCRYPT_SALT_ROUNDS);
        return bcrypt_1.default.hashSync(password, salt);
    };
    // Generate JWT token
    Utility.generateJwtToken = function (userUUID) {
        return jsonwebtoken_1.default.sign({
            id: userUUID,
        }, environment_1.CONFIG.jwt.secret, { expiresIn: '1d' });
    };
    return Utility;
}());
exports.Utility = Utility;
//# sourceMappingURL=util.js.map