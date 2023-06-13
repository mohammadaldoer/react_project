import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products.json';
import './ProductInfo.css'
const ProductInfo = () => {
  let recipeId  = useParams().id;
console.log(recipeId)
  const recipe = Products.find((item) => item.id === parseInt(recipeId));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div id="card_info">
      <div id ="inner">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} width='300px'height='300px'alt='' />
      <p>{recipe.description}</p>
      <br />
        <h2>price : {recipe.price}$</h2>
        <h2>category : {recipe.category}</h2>
    </div></div>
  );
};

export default ProductInfo;
