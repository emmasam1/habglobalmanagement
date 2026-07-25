"use client";

import { create } from "zustand";

import {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
} from "@/api/authService";

import {
  encryptData,
  decryptData,
} from "@/utils/encryption";

const SESSION_KEY = "hab_admin";

function getAdminFromResponse(response) {
  return (
    response?.admin ||
    response?.data?.admin ||
    response?.data ||
    null
  );
}

const useAuthStore = create((set, get) => ({
  admin: null,

  loading: false,

  sessionChecked: false,

  isAuthenticated: false,

  error: "",

  login: async (payload) => {
    try {
      set({
        loading: true,
        error: "",
      });

      const response =
        await loginAdmin(payload);

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to log in.",
        );
      }

      const admin =
        getAdminFromResponse(response);

      if (!admin) {
        throw new Error(
          "The server did not return the administrator details.",
        );
      }

      sessionStorage.setItem(
        SESSION_KEY,
        encryptData(admin),
      );

      set({
        admin,
        isAuthenticated: true,
        loading: false,
        sessionChecked: true,
        error: "",
      });

      return response;
    } catch (error) {
      sessionStorage.removeItem(
        SESSION_KEY,
      );

      set({
        admin: null,
        isAuthenticated: false,
        loading: false,
        sessionChecked: true,
        error: getAuthErrorMessage(
          error,
          "Unable to log in.",
        ),
      });

      throw error;
    }
  },

  logout: async () => {
    try {
      set({
        loading: true,
        error: "",
      });

      await logoutAdmin();
    } catch (error) {
      console.error(
        "Logout error:",
        error,
      );
    } finally {
      sessionStorage.removeItem(
        SESSION_KEY,
      );

      set({
        admin: null,
        isAuthenticated: false,
        loading: false,
        sessionChecked: true,
        error: "",
      });
    }
  },

  loadSession: async () => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    if (
      get().loading ||
      get().sessionChecked
    ) {
      return;
    }

    set({
      loading: true,
      error: "",
    });

    try {
      /*
       * The backend cookie is the source of truth.
       * Do not authenticate the user using sessionStorage alone.
       */
      const response =
        await getCurrentAdmin();

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Authentication required.",
        );
      }

      const admin =
        getAdminFromResponse(response);

      if (!admin) {
        throw new Error(
          "The administrator session could not be verified.",
        );
      }

      sessionStorage.setItem(
        SESSION_KEY,
        encryptData(admin),
      );

      set({
        admin,
        isAuthenticated: true,
        loading: false,
        sessionChecked: true,
        error: "",
      });
    } catch (error) {
      sessionStorage.removeItem(
        SESSION_KEY,
      );

      set({
        admin: null,
        isAuthenticated: false,
        loading: false,
        sessionChecked: true,
        error: "",
      });
    }
  },

  restoreCachedAdmin: () => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    const encryptedAdmin =
      sessionStorage.getItem(
        SESSION_KEY,
      );

    if (!encryptedAdmin) {
      return;
    }

    try {
      const admin =
        decryptData(encryptedAdmin);

      if (admin) {
        /*
         * Only restore the admin for display.
         * Do not mark the user authenticated
         * until /auth/me succeeds.
         */
        set({
          admin,
        });
      }
    } catch (error) {
      sessionStorage.removeItem(
        SESSION_KEY,
      );
    }
  },

  clearAuth: () => {
    if (
      typeof window !== "undefined"
    ) {
      sessionStorage.removeItem(
        SESSION_KEY,
      );
    }

    set({
      admin: null,
      isAuthenticated: false,
      loading: false,
      sessionChecked: true,
      error: "",
    });
  },
}));

function getAuthErrorMessage(
  error,
  fallbackMessage,
) {
  if (
    error?.code ===
    "ECONNABORTED"
  ) {
    return "The request timed out. Please try again.";
  }

  if (!error?.response) {
    return "Unable to connect to the server.";
  }

  return (
    error.response?.data?.message ||
    error.response?.data?.error ||
    error.message ||
    fallbackMessage
  );
}

export default useAuthStore;