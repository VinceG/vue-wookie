import http from "@/services/http";

export default {
  async search(term) {
    return await http.get("movies", {
      params: {
        q: term
      }
    });
  }
};
