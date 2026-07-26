"use client";

import { useCallback, useEffect, useState } from "react";

import adminApi from "@/api/adminApi";
import requestApi from "@/api/requestApi";

const loaders = {
  requests: () => requestApi.getRequests(),
  clients: () => adminApi.getClients({ page: 1, limit: 100 }),
  invoices: () => adminApi.getInvoices({ page: 1, limit: 100 }),
  payments: () => adminApi.getPayments({ page: 1, limit: 100 }),
  email: () => adminApi.getEmailDeliveries({ page: 1, limit: 100 }),
};

export default function useAdminWorkspaceData(variant) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const load = loaders[variant] || loaders.requests;
      const response = await load();

      if (!response?.success) {
        throw new Error(response?.message || "Unable to load this page.");
      }

      setData(Array.isArray(response.data) ? response.data : []);
    } catch (requestError) {
      setData([]);
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load this page.",
      );
    } finally {
      setLoading(false);
    }
  }, [variant]);

  useEffect(() => {
    const timer = window.setTimeout(reload, 0);
    return () => window.clearTimeout(timer);
  }, [reload]);

  return {
    data,
    setData,
    loading,
    error,
    reload,
  };
}
