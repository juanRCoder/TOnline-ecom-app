import { Router } from "express";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "@server/api/categories/categories.controller";
import { param } from "express-validator";

const categoryRouter = Router();

const validateUUID = (fieldName: string) =>
  param("id").isUUID().withMessage(`Invalid ${fieldName} ID`);

categoryRouter.get("/", getAll);
categoryRouter.get("/:id", validateUUID("category"), getById);
categoryRouter.post("/", create);
categoryRouter.patch("/:id", validateUUID("category"), update);
categoryRouter.delete("/:id", validateUUID("category"), remove);

export default categoryRouter;
