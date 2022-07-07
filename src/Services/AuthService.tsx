import axios from "axios";
import { storeActions } from "../utils/store";
const API_URL = "http://localhost:4000/cUser/Authenticate/";

export const Login = ({ username, password }: LoginProps) => {
  return axios
    .post(API_URL, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accesToken) {
        storeActions.user.set(JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const Logout = () => {
  storeActions.user.remove();
};

export const Register = ({ username, password, email }: RegisterProps) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

interface LoginProps {
  username: string;
  password: string;
}
interface RegisterProps extends LoginProps {
  email: string;
}
