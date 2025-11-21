const API = import.meta.env.VITE_API_DEV;

export const getAllProducts = async (searchTerm?: string) => {
  try {
    const queryParam = searchTerm
      ? `?searchTerm=${encodeURIComponent(searchTerm)}`
      : "";

    const response = await fetch(`${API}/products${queryParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[getAllProducts]", error);
    throw error;
  }
};

export const getProductsByCategory = async (id: string) => {
  try {
    const response = await fetch(`${API}/products/category/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[getProductsByCategory]", error);
    throw error;
  }
};
