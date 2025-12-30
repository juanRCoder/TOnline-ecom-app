import { prisma } from "@server/prisma";
import { createCategoryDto } from "./categories.dto";
import { errorPrisma } from "@server/middlewares/errorHandler.middleware";
import { PrismaErrorCode } from "@server/constants/PrismaErrorCode";

const getAll = () => {
  return prisma.categories.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

const getById = (id: string) => {
  return prisma.categories.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  });
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
    if (errorPrisma(error, PrismaErrorCode.UNIQUE_CONSTRAINT)) {
      throw new Error("The category already exists");
    }
    throw error;
  }
};

export const CategoryServices = {
  getAll,
  getById,
  create,
};
