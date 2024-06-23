import axios from "axios";
import { Cookies } from "react-cookie";

const register = (username, email, password) => {
  const cookies = new Cookies();
  cookies.set('user', username)
  cookies.set('email', email)
  cookies.set('password', password)
  return true
};

const login = (username, password) => {
  const cookies = new Cookies()
  const user=cookies.get('user')
  const pwd=cookies.get('password')
  if((user == username) && (pwd==password)){
    return true
  }
  return false
};

const logout = () => {
  return true
};

const getCurrentUser = () => {
  const cookies = new Cookies()
  return JSON.parse(cookies.get('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
