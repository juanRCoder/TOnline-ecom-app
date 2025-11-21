import { Request, Response, NextFunction } from "express";
import { OrderServices } from "./orders.service";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { orderListDto } from "./orders.dto";

export const getAllOrders = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderList: orderListDto[] = await OrderServices.findAllOrders();

    if (!orderList.length) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(apiResponse(false, { message: "There are no orders" }));
    }
    return res.status(HttpStatus.OK).json(apiResponse(true, orderList));
  } catch (error) {
    console.error("[Controller: getAllOrders]", error);
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { products, ...orderData } = req.body;

  if (!products || products.length === 0) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(
        apiResponse(false, {
          message: "No se proporcionaron productos para el pedido",
        })
      );
  }

  try {
    const newOrder = await OrderServices.createOrder(orderData, products);
    return res.status(HttpStatus.OK).json(apiResponse(true, newOrder));
  } catch (error) {
    console.error("[Controller: createOrder]", error);
    next(error);
  }
};
