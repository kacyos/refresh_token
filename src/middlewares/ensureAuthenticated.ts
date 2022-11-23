import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  console.log(authToken);

  const [, token] = authToken.split(" ");

  if (!token) {
    return response.status(401).json({
      message: "Token is missing.",
    });
  }

  try {
    verify(token, "f7850e6a-9c86-47f1-882d-d3d3b5bfff75");
    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Token is invalid.",
    });
  }
}
