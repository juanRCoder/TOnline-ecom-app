import { Request, Response } from "express";
import { OrderServices } from "./orders.service";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";

export const getAll = async (_req: Request, res: Response) => {
  const orders = await OrderServices.getAll();
  return res.status(HttpStatus.OK).json(apiResponse(true, orders));
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const order = await OrderServices.getById(id);
  return res.status(HttpStatus.OK).json(apiResponse(true, order));
};

export const create = async (req: Request, res: Response) => {
  const { products, ...orderData } = req.body;
  const imageVoucher = req.file?.buffer;

  if (!products) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(apiResponse(false, { message: "products not defined" }));
  }
  const createdOrder = await OrderServices.create(
    orderData,
    JSON.parse(products),
    imageVoucher
  );
  return res.status(HttpStatus.OK).json(apiResponse(true, createdOrder));
};

export const confirmDeliveryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  await OrderServices.confirmDeliveryById(id);
  return res.status(HttpStatus.OK).json(apiResponse(true, { ok: true }));
}