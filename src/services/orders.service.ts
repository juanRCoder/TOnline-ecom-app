const API = import.meta.env.VITE_API_DEV;

export const getAll = async () => {
  try {
    const response = await fetch(`${API}/orders`, {
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

export const createOrder = async (orderData: FormData) => {
  try {
    const response = await fetch(`${API}/orders`, {
      method: "POST",
      body: orderData,
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.payload.message);
    return result;
  } catch (error) {
    console.error("[createOrder]", error);
    throw error;
  }
};
