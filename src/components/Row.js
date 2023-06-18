import React from "react";
import { useNavigate } from "react-router-dom";

const Row = (props) => {
  let { name, info, glass, id } = props;
  const navigate = useNavigate();

  const navigateToCocktail = () => {
    navigate(`/cocktail/${id}`);
  };
  return (
    <tr className='trBody' onClick={navigateToCocktail}>
      <td className='td'>{id}</td>
      <td className='td'>{name}</td>
      <td className='td'>{info}</td>
      <td className='td'>{glass}</td>
    </tr>
  );
};
export default Row;
