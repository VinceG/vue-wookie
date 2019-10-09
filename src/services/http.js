import axios from "axios";

let baseUrl = "https://wookie.codesubmit.io";
let token = "Wookie2019";

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    common: {
      "X-Requested-With": "XMLHttpRequest"
    },
    Authorization: token ? `Bearer ${token}` : null
  }
});

export default http;
