import { getAuthToken } from "@/data/auth";

const BASE_URL = process.env.DSS_API_URL || "http://localhost:8000";

export const test = async () => {
  try {
    const JWT = await getAuthToken();
    const response = await fetch(`${BASE_URL}/api/dss`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
    });

    return response.json();
  } catch (error) {
    return error;
  }
};
