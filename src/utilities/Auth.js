import Cookies from "js-cookie";
export const isAuthnticate = () => {
  const token = Cookies.get("jwt");
  return token ? true : false;
};
