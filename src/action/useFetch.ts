import { getAuthToken } from "@/data/auth";

export async function localFetch<T>(
  url: string,
  options?: RequestInit
): Promise<Response> {
  const JWT = await getAuthToken();
  const response = await fetch(url, {
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${JWT}`,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
