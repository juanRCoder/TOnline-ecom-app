import { prisma } from "@server/prisma";
import { createCategoryDto, UpdateCategoryDto } from "./categories.dto";
import { errorPrisma } from "@server/middlewares/errorHandler.middleware";

const getAll = () => {
  return prisma.categories.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

const getById = async (id: string) => {
  const category = await prisma.categories.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  });

  if (!category) throw new Error(`Category with ${id} not found`);
  return category;
};

const create = async (data: createCategoryDto) => {
  try {
    return await prisma.categories.create({
      data: {
        name: data.name.toLowerCase().trim().replace(/\s+/g, ""),
      },
      select: {
        id: true,
        name: true,
      },
    });
  } catch (error) {
    if (errorPrisma(error, "P2002")) {
      throw new Error("The category already exists");
    }
    throw error;
  }
};

const update = async (id: string, data: UpdateCategoryDto) => {
  let name: string | undefined;
  if (data.name) name = data.name.toLowerCase().trim().replace(/\s+/g, "");

  try {
    return await prisma.categories.update({
      where: { id },
      data: { name },
    });
  } catch (error) {
    if (errorPrisma(error, "P2002")) {
      throw new Error("The category already exists");
    }
    if (errorPrisma(error, "P2025")) {
      throw new Error(`Category with id ${id} not found`);
    }
    throw error;
  }
};

const remove = async (id: string) => {
  try {
    return await prisma.categories.delete({
      where: { id },
    });
  } catch (error) {
    if (errorPrisma(error, "P2025")) {
      throw new Error(`Category with id ${id} not found`);
    }
    throw error;
  }
};

export const CategoryServices = {
  getAll,
  getById,
  create,
  update,
  remove,
};
