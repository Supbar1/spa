import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    (error.response.status >= 400) && (error.response.status <= 599);
  if (!expectedError) {
    alert("Siema eniu");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
};
