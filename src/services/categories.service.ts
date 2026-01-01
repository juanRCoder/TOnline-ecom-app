import type { CategoryType } from "@/types/categories.type";

const API = import.meta.env.VITE_API_DEV;

export const getAll = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[service getAll]", error);
    throw error;
  }
};

export const getById = async (id: string) => {
  try {
    const response = await fetch(`${API}/categories/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[service getById]", error);
    throw error;
  }
};

export const update = async ({
  data,
  id,
}: {
  data: Partial<CategoryType>;
  id: string;
}) => {
  try {
    const response = await fetch(`${API}/categories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[service update]", error);
    throw error;
  }
};
