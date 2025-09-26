import type { Request, Response, NextFunction } from "express";

export const debugBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    console.log("Raw request body:", body);
    console.log("Request headers:", req.headers);
  });
  next();
};
