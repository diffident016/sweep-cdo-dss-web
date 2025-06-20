import { localFetch } from "@/action/useFetch";

const BASE_URL = process.env.DSS_API_URL || "http://localhost:8000";

export const uploadFile = async (file: File, module: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("module", module);

  try {
    const response = await localFetch(`${BASE_URL}/api/storage/upload`, {
      method: "POST",
      body: formData,
    });

    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
