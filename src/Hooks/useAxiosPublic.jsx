import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://task-tracker-server-ten.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
