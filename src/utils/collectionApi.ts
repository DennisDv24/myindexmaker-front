import axios from "axios";
export default axios.create({
  baseURL: 'https://api.opensea.io/api/v1',
  headers: {
    "Content-type": "application/json"
  }
});