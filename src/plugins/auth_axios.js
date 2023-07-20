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
export default auth_axios;
