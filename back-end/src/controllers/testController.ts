import { Request, Response } from "express";
import { testService } from "../services/testService.js";

async function deleteAll(req: Request, res: Response) {
  await testService.deleteAll();
  res.sendStatus(201);
}

export const testController = {
  deleteAll,
};
