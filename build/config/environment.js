"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.CONFIG = {
    NODE_ENV: process.env.NODE_ENV,
    DB_CONNECTION_STRING: process.env.DB_STRING,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS
        ? parseInt(process.env.BCRYPT_SALT_ROUNDS)
        : 10,
    jwt: {
        secret: "SDKFJ9#R3IO90U3@#9DSFIN",
        options: {
            expiresIn: "1d",
        },
    }
};
//# sourceMappingURL=environment.js.map