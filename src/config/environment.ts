import * as dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV,
  DB_CONNECTION_STRING: process.env.DB_STRING,
  
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS
    ? parseInt(process.env.BCRYPT_SALT_ROUNDS)
    : 10,
  jwt: {
    secret: "SDKFJ9#R3IO90U3@#9DSFIN",
    options: {
      expiresIn: "1d", 
    },},
  COOKIE_KEY: "thisappisawesomevgfhjfg"
};
