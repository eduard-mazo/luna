import axios from "axios";

export default () => {
  return axios.created({
    baseURL: `http://localhost:3000/`
  });
};
