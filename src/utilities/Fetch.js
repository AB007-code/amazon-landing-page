import Cookies from "js-cookie";
export const Fetch = async () => {
  // const [prod, setProd] = useState();
  // useEffect(() => {
  //   data();
  // }, []);
  try {
    console.log(Cookies.get("jwt"));
    const fetchData = await fetch("http://localhost:5000/api/getProducts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    });
    const res = await fetchData.json();
    return res;
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err;
  }
};
