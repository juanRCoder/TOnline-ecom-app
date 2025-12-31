import { Prisma } from "@server/generated/prisma/client";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error & { status?: number },
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  console.error(error)
  res.status(status).json({success: false, payload: { message }});
}

export const errorPrisma = (error: unknown, code: string) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === code) return true
}