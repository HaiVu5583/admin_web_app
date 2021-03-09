const axios = require("axios").default;

const DEFAULT_BASE_URL = "https://ekyc2-api-test.mbinnolab.com";
const DEFAULT_TIMEOUT = 5000;

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const get = async ({ url, params, baseURL = DEFAULT_BASE_URL }) => {
  const response = await axios.get(url, {
    params,
    baseURL,
    timeout: DEFAULT_TIMEOUT,
    headers: getHeaders(),
  });
  return response;
};

export const post = async ({ url, data, baseURL = DEFAULT_BASE_URL }) => {
  console.log("Call post", url, data, baseURL);
  const response = await axios.post(url, data, {
    baseURL,
    timeout: DEFAULT_TIMEOUT,
    headers: getHeaders(),
  });
  return response;
};
