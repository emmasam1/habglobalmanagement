import api from "@/lib/axios";

export const loginAdmin = async (payload) => {
  const response = await api.post(
    "/auth/login",
    payload,
  );

  return response.data;
};

export const logoutAdmin = async () => {
  const response = await api.post(
    "/auth/logout",
  );

  return response.data;
};

export const getCurrentAdmin = async () => {
  const response = await api.get(
    "/auth/me",
  );

  return response.data;
};