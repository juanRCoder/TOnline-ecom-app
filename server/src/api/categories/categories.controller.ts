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

  if (!data.name) throw new Error("name is required")

  await CategoryServices.create(data);
  return res.status(HttpStatus.CREATED).json(apiResponse(true, { ok: true }));
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  await CategoryServices.update(id, data)
  return res.status(HttpStatus.OK).json(apiResponse(true, { ok: true }));
}

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  await CategoryServices.remove(id)
  return res.status(HttpStatus.OK).json(apiResponse(true, { ok: true }));
}