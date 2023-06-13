import axios from "axios";

export default axios.create({
  baseURL: "https://gym-api-production-ee00.up.railway.app/api/",
});
