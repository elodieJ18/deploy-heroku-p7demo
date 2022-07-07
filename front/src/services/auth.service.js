import axios from "axios";
const API_URL = "http://localhost:3001/api/auth/";
class AuthService {
  login(email, password) {
    const response = await axios
      .post(API_URL + "signin", {
        email,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  signup(nom, prenom, status, email, password) {
    return axios.post(API_URL + "signup", {
      nom,
      prenom,
      status,
      email,
      password
    });
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();