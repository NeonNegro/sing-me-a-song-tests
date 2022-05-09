import { Router } from "express";
import { testController } from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/tests/deleteAll", testController.deleteAll);
// testRouter.get("/", testsController.get);
// testRouter.get("/random", testsController.random);
// testRouter.get("/top/:amount", testsController.getTop);
// testRouter.get("/:id", testsController.getById);
// testRouter.post("/:id/upvote", testsController.upvote);
// testRouter.post("/:id/downvote", testsController.downvote);

export default testRouter;
