import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { ProductServices } from "@server/api/products/products.service";
import { productListDto } from "@server/api/products/products.dto";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.query;
  const term = typeof searchTerm === "string" ? searchTerm : undefined;

  try {
    const productList: productListDto[] = await ProductServices.findAllProducts(
      term
    );

    if (!productList.length) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(apiResponse(false, { message: "No se encontraron productos" }));
    }

    return res.status(HttpStatus.OK).json(apiResponse(true, productList));
  } catch (error) {
    console.error("[Controller: getAllProducts]", error);
    next(error);
  }
};

export const getProductsByCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const productList: productListDto[] =
      await ProductServices.findProductsByCategoryId(id);

    if (!productList.length) {
      return res.status(HttpStatus.NOT_FOUND).json(
        apiResponse(false, {
          message: "No se encontraron productos para esta categoría",
        })
      );
    }

    return res.status(HttpStatus.OK).json(apiResponse(true, productList));
  } catch (error) {
    console.error("[Controller: getProductsByCategoryId]", error);
    next(error);
  }
};
