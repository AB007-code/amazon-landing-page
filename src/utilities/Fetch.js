export const Fetch = async () => {
  // const [prod, setProd] = useState();
  // useEffect(() => {
  //   data();
  // }, []);
  try {
    const fetchData = await fetch("http://localhost:5000/api/getProducts");
    const res = await fetchData.json();
    return res;
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err;
  }
};
