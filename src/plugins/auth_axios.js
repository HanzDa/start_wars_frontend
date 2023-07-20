"use strict";

import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
const apiBaseUrl = process.env.VUE_APP_BASE_AUTH_API_URL;


let config = {
  baseURL: apiBaseUrl,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const auth_axios = axios.create(config);

auth_axios.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
auth_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default auth_axios;
