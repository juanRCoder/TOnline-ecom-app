import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { CategoryServices } from "@server/api/categories/categories.service";
import { categoryListDto } from "@server/api/categories/categories.dto";

export const getAllCategories = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryList: categoryListDto[] =
      await CategoryServices.findAllCategories();

    if (!categoryList.length) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(apiResponse(false, { message: "No se encontraron categorias" }));
    }

    return res.status(HttpStatus.OK).json(apiResponse(true, categoryList));
  } catch (error) {
    console.error("[Controller: getAllCategories]", error);
    next(error);
  }
};
