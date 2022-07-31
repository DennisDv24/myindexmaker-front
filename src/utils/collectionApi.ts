import axios from "axios";
export default axios.create({
  baseURL: 'https://api.opensea.io/api/v1/collection/',
  headers: {
    "Content-type": "application/json"
  }
});