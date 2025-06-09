import jwt from "jsonwebtoken";

const SECRET = process.env.NEXTAUTH_SECRET || "default";

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET as jwt.Secret, { algorithm: "HS256" });
}
