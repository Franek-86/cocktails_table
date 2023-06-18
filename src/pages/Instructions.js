import React, { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import pic from "../images/test.jpg";
import instructionPic from "../images/instructionPic.jpg";
import { useGlobalContext } from "../context";

import { useNavigate } from "react-router-dom";
export default function Instructions() {
  const { cocktail, loading, getCocktail } = useGlobalContext();
  // const { id } = useParams();
  const navigate = useNavigate();

  // this would make sure that even refreshing the page the single cocktail will be fetch but it would still fetch it when not needed (uncommenting it but could be an option)
  // React.useEffect(() => {
  //   getCocktail(id);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  if (!cocktail) {
    navigate("/");
  } else {
    const { name, instructions, ingredients, idLink } = cocktail;
    return (
      <>
        {/* <Breadcrumbs name={name} id={idLink} /> */}

        <section className='section cocktail-section'>
          <h2 className='section-title'>make your {name}</h2>
          <div className='drink instructions-drink'>
            <div className='bartender-pic'></div>
            <div className='drink-info'>
              <p>
                <span className='drink-data'>basic rules :</span>
                Before assembling your tools, there are three elements that make
                up a cocktail. They are the core (base spirit), the balance
                (sugar), and seasoning (bitters).
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}</span> : null;
                })}
              </p>
              <p>
                <span className='drink-data'>instructions :</span>
                {instructions}
              </p>
              <p className='text'>
                If you need any further assistance during the preparation of
                your <span>{name}</span>cocktail, visit our &nbsp;
                <Link to={`/cocktail/contact`}>contact page</Link>
                &nbsp;and can get in touch with an {name} specialist.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
