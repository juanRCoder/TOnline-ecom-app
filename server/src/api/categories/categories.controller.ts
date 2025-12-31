import { Request, Response } from "express";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { CategoryServices } from "@server/api/categories/categories.service";

export const getAll = async (_req: Request, res: Response) => {
  const categories = await CategoryServices.getAll();
  return res.status(HttpStatus.OK).json(apiResponse(true, categories));
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await CategoryServices.getById(id);
  return res.status(HttpStatus.OK).json(apiResponse(true, category));
};

export const create = async (req: Request, res: Response) => {
  const data = req.body;

  await CategoryServices.create(data);
  return res.status(HttpStatus.CREATED).json(apiResponse(true, { ok: true }));
};
