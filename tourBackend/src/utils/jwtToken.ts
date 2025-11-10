import jwt from "jsonwebtoken";
import { config } from "dotenv";

interface playloadInterface {
  id: string;
  name: string;
  email: string;
  phonenumber: string;
}

config();

const secretkey = process.env.jwtSecretKey;

export const jwtTokenGenerator = (playload: playloadInterface) => {
  if (!secretkey) {
    throw new Error("JWT secret key is missing in environment variables");
  }
  return jwt.sign(playload, secretkey, { expiresIn: "1d" });
};
