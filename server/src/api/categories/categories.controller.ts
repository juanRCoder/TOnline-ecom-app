import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { CategoryServices } from "@server/api/categories/categories.service";

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await CategoryServices.getAll();
    return res.status(HttpStatus.OK).json(apiResponse(true, categories));
  } catch (error) {
    console.error("[Controller getAll]", error);
    next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const category = await CategoryServices.getById(id);
    if (!category) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(apiResponse(false, { message: "Category not found" }));
    }

    return res.status(HttpStatus.OK).json(apiResponse(true, category));
  } catch (error) {
    console.error("[Controller getById]", error);
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  try {
    await CategoryServices.create(data);
    return res.status(HttpStatus.CREATED).json(
      apiResponse(true, {
        message: "Category created successfully",
      })
    );
  } catch (error) {
    console.error("[Controller create]", error);
    next(error);
  }
};
