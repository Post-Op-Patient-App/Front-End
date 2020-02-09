import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    baseURL: "https://post-op-patient.herokuapp.com/api/auth",
    headers: {
      Authorization: token
    }
  })
}
