import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      typeof window !== "undefined" &&
      error?.response?.status === 401
    ) {
      sessionStorage.removeItem(
        "hab_admin",
      );

      const currentPath =
        window.location.pathname;

      const isAuthPage =
        currentPath.includes(
          "/admin-login",
        );

      if (!isAuthPage) {
        window.location.href =
          "/admin-login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;