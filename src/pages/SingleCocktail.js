import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

export default function SingleCocktail() {
  const { cocktail, loading, getCocktail } = useGlobalContext();
  const { id } = useParams();
  React.useEffect(() => {
    getCocktail(id);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, idLink, ingredients } =
      cocktail;
    return (
      <section className='section'>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img className='single-drink-pic' src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
            <Link
              to={`/cocktail/${id}/instructions`}
              className='btn-primary btn-block'
            >
              How to make it
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
