import api from "@/lib/axios";

const serviceApi = {
  
  getServices: async ({ page = 1, limit = 9, search = "" } = {}) => {
    const response = await api.get("/services", {
      params: {
        page,
        limit,
        search,
      },
    });

    return response.data;
  },

  getService: async (slug) => {
    if (!slug) {
      throw new Error("A service slug is required.");
    }

    const response = await api.get(`/services/${encodeURIComponent(slug)}`);

    return response.data;
  },

  createService: async (formData) => {
    const { data } = await api.post("/services", formData);

    return data;
  },

  updateService: async (id, formData) => {
    if (!id) {
      throw new Error("A service ID is required.");
    }

    if (!(formData instanceof FormData)) {
      throw new Error("updateService expects a FormData object.");
    }

    const response = await api.put(
      `/services/${encodeURIComponent(id)}`,
      formData,
    );

    return response.data;
  },

  deleteService: async (id) => {
    if (!id) {
      throw new Error("A service ID is required.");
    }

    const response = await api.delete(`/services/${encodeURIComponent(id)}`);

    return response.data;
  },
};

export default serviceApi;
