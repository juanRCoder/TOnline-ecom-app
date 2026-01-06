import { Router } from "express";
import { getAll, create, getById, confirmDeliveryById } from "@server/api/orders/orders.controller";
import { uploader } from "@server/middlewares/imageUpload.middlware";
import { param } from "express-validator";

const orderRouter = Router();

const validateUUID = (fieldName: string) =>
  param("id").isUUID().withMessage(`Invalid ${fieldName} ID`);

orderRouter.get("/", getAll);
orderRouter.get("/:id", validateUUID("order"), getById)
orderRouter.post("/", uploader("imageVoucher"), create)
orderRouter.patch("/confirm-delivery/:id", validateUUID("order"), confirmDeliveryById)

export default orderRouter;
