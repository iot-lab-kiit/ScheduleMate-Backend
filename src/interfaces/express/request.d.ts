import { Request } from "express";

declare module "express" {
  interface Request {
    user?: {
      sub: string;
      name: string;
      email: string;
      picture?: string;
    };
  }
}
