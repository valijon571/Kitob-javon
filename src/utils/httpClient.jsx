import axios from "axios";
import { api_host } from "./api";
const CryptoJS = require("crypto-js");

axios.interceptors.request.use(
  (config) => {
    console.log("config", config);
    if (config.url !== "/signup ") {
      const key = localStorage.getItem("key");
      const secret = localStorage.getItem("secret");
      const sign_str = `${config.method}${config.url}${JSON.stringify(
        config.data
      )}${secret}`;
      console.log("sign_str", sign_str);
      config.headers["Sign"] = CryptoJS.MD5(sign_str).toString();
      config.headers["Key"] = key;
    }
    config.headers["Access-Control-Allow-Origin"] = "null";
    return config;
  },
  (e) => {
    console.log("e", e);
    return Promise.reject(e);
  }
);

const Axios = () => {
  const defaultOptions = {
    baseURL: api_host,
  };
  return {
    get: (url, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options }),
  };
};
export default Axios;
