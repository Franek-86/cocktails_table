import React, { useState, useContext, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [cocktail, setCocktail] = useState(null);
  const [useId, setUseId] = useState(null);
  const [useName, setUseName] = useState(null);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strGlass } = item;

          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, []);
  const getCocktail = async (params) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params}`
      );
      const data = await response.json();

      if (data.drinks) {
        const {
          idDrink: idLink,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          idLink,
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
        setUseId(idLink);
        setUseName(name);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        cocktail,
        useId,
        useName,
        getCocktail,
        fetchDrinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
