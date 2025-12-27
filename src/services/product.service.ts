const API = import.meta.env.VITE_API_DEV;

export const getAll = async (searchTerm?: string, isAdmin: boolean = false) => {
  try {
    const params = new URLSearchParams();
    if (searchTerm) params.append("searchTerm", searchTerm);
    if (isAdmin) params.append("isAdmin", "true");

    const response = await fetch(`${API}/products?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[Service: getAll]", error);
    throw error;
  }
};

export const getByCategoryId = async (id: string) => {
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
    console.error("[Service: getByCategoryId]", error);
    throw error;
  }
};

export const getById = async (id: string) => {
  try {
    const response = await fetch(`${API}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[Service: getById]", error);
    throw error;
  }
};

export const create = async (data: FormData) => {
  try {
    const response = await fetch(`${API}/products`, {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[Service: create]", error);
    throw error;
  }
};

export const update = async ({ data, id }: { data: FormData; id: string }) => {
  try {
    const response = await fetch(`${API}/products/${id}`, {
      method: "PATCH",
      body: data,
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[Service: update]", update);
    throw error;
  }
};

export const remove = async (id: string) => {
  try {
    const response = await fetch(`${API}/products/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[Service: update]", update);
    throw error;
  }
};
