import { PrismaClient } from "@prisma/client";

// Ensure the PrismaClient is instantiated only once in development mode
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize PrismaClient
export const db = globalThis.prisma || new PrismaClient();

// If not in production, attach PrismaClient to the global object to prevent
// instantiating multiple PrismaClient instances during development
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
