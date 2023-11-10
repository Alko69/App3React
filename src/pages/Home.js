import CocktailsList from "../components/CocktailsList";
import { useEffect, useState } from "react";

const Home = () => {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
  const [cocktailList, setCocktailList] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCocktailList(data.drinks);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="loading">{loading && "Loading..."}</h2>
      <CocktailsList cocktails={cocktailList} />
    </>
  );
};

export default Home;
