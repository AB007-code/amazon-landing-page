import Cookies from "js-cookie";
export const Fetch = async () => {
  try {
    console.log(Cookies.get("jwt"));
    const fetchData = await fetch(
      "https://amazon-landing-page-backend.onrender.com/api/getProducts",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }
    );
    const res = await fetchData.json();
    return res;
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err;
  }
};
