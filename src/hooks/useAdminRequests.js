"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import requestApi from "@/api/requestApi";

export default function useAdminRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await requestApi.getRequests();

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to load requests.",
        );
      }

      setRequests(
        Array.isArray(response.data)
          ? response.data
          : [],
      );
    } catch (requestError) {
      setRequests([]);
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load requests.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(
      reload,
      0,
    );

    return () => window.clearTimeout(timer);
  }, [reload]);

  return {
    requests,
    setRequests,
    loading,
    error,
    reload,
  };
}
