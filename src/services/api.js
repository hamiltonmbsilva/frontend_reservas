const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function apiFetch(endpoint, options = {}) {
  if (!API_URL) {
    throw new Error("API não configurada.");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Não foi possível carregar os dados da API.");
  }

  return response.json();
}