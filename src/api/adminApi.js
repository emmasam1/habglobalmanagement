import api from "@/lib/axios";

const get = async (path, params) => {
  const response = await api.get(path, { params });
  return response.data;
};

const isMissingRoute = (error) =>
  error?.response?.status === 404 &&
  error?.response?.data?.message?.includes("Route not found");

const getLegacyDashboard = async () => {
  const [servicesResult, requestsResult] = await Promise.allSettled([
    api.get("/services", {
      params: { page: 1, limit: 100 },
    }),
    api.get("/requests"),
  ]);

  if (servicesResult.status === "rejected") {
    throw servicesResult.reason;
  }

  const servicesPayload = servicesResult.value.data;
  const services = Array.isArray(servicesPayload?.data)
    ? servicesPayload.data
    : [];
  const requests =
    requestsResult.status === "fulfilled" &&
    Array.isArray(requestsResult.value.data?.data)
      ? requestsResult.value.data.data
      : [];
  const activeServices = services.filter((service) => service.active).length;
  const paidRequests = requests.filter(
    (request) => request.paymentStatus === "Paid",
  );

  return {
    success: true,
    data: {
      totals: {
        services: servicesPayload?.total ?? services.length,
        activeServices,
        featuredServices: services.filter((service) => service.featured)
          .length,
        inactiveServices: Math.max(services.length - activeServices, 0),
        requests: requests.length,
        paidRequests: paidRequests.length,
        pendingRequests: requests.filter(
          (request) => request.status === "Pending",
        ).length,
        completedRequests: requests.filter(
          (request) => request.status === "Completed",
        ).length,
        revenue: paidRequests.reduce(
          (total, request) => total + (Number(request.amount) || 0),
          0,
        ),
      },
      recentServices: [...services]
        .sort(
          (first, second) =>
            new Date(second.createdAt || 0) -
            new Date(first.createdAt || 0),
        )
        .slice(0, 5),
      recentRequests: requests.slice(0, 5),
    },
  };
};

const adminApi = {
  getDashboard: async () => {
    try {
      return await get("/admin/dashboard");
    } catch (error) {
      if (!isMissingRoute(error)) throw error;
      return getLegacyDashboard();
    }
  },
  getClients: (params) => get("/admin/clients", params),
  getInvoices: (params) => get("/admin/invoices", params),
  getPayments: (params) => get("/admin/payments", params),
  getEmailDeliveries: (params) =>
    get("/admin/email-deliveries", params),
  getAnalytics: () => get("/admin/analytics"),
  getSettings: () => get("/admin/settings"),
  retryPaymentEmails: async (requestId) => {
    const response = await api.post(
      `/payments/${encodeURIComponent(requestId)}/retry-emails`,
    );

    return response.data;
  },
};

export default adminApi;
