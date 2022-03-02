import axios from "axios";
export default axios.create({
  baseURL: "https://60e84194673e350017c21844.mockapi.io/api",
  headers: {
    "Content-type": "application/json"
  }
});
 
