import { Request, Response, NextFunction } from "express";
import { OrderServices } from "./orders.service";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";

export const getAll = async (_req: Request, res: Response) => {
  const orders = await OrderServices.getAll();
  return res.status(HttpStatus.OK).json(apiResponse(true, orders));
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { products, ...orderData } = req.body;
  const imageVoucher = req.file?.buffer;

  if (!products) {
    return res.status(HttpStatus.BAD_REQUEST).json(
      apiResponse(false, {
        message: "There are no products for the order",
      })
    );
  }

  try {
    const createdOrder = await OrderServices.create(
      orderData,
      JSON.parse(products),
      imageVoucher
    );
    return res.status(HttpStatus.OK).json(apiResponse(true, createdOrder));
  } catch (error) {
    console.error("[Controller: createOrder]", error);
    next(error);
  }
};
