import api from "@/lib/axios";

const requestApi = {
  getRequests: async () => {
    const response = await api.get("/requests");
    return response.data;
  },

  getRequest: async (id) => {
    if (!id) {
      throw new Error("A request ID is required.");
    }

    const response = await api.get(
      `/requests/${encodeURIComponent(id)}`,
    );

    return response.data;
  },

  updateStatus: async (id, status) => {
    if (!id) {
      throw new Error("A request ID is required.");
    }

    const response = await api.put(
      `/requests/${encodeURIComponent(id)}`,
      { status },
    );

    return response.data;
  },

  deleteRequest: async (id) => {
    if (!id) {
      throw new Error("A request ID is required.");
    }

    const response = await api.delete(
      `/requests/${encodeURIComponent(id)}`,
    );

    return response.data;
  },
};

export default requestApi;
