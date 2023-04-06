import { requestFactory } from "../data/requester";

const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {
  const request = requestFactory(token);

  const register = (data) => request.post(`${baseUrl}/register`, data);
  const login = (data) => request.post(`${baseUrl}/login`, data);
  const logout = () => request.get(`${baseUrl}/logout`);

  return {
    register,
    login,
    logout,
  };
};
