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
