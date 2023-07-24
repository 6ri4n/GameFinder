import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7be710009f44df2b42085d23403eff2",
  },
});
