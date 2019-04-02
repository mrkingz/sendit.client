import axios from "axios";

const setAthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common["token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["token"];
  }
};

export default setAthorizationToken;