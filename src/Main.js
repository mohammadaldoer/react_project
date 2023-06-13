import React from 'react';
import { useState } from 'react';
import Products from './Products.json';
import { Link } from 'react-router-dom';
import imgg from './R.jpg';


const Main = () => {
  const [filteredList, setFilteredList] = useState(Products);

  const search = (event) => {
    let query = event.target.value;

    let updatedList = Products.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredList(updatedList);
  };

  return (
    <div>
      <div id='search'>
        <input type='text' onChange={search} />
        <button >
          <img src={imgg} width='20px' alt='' />
        </button>
      </div>
      <div id='main'>
        {filteredList.map((recipe) => (
          <div className='recipe_card__header' key={recipe.id}>
            <br />
            <img width={200} height={200} src={recipe.image} alt='' />

            <br />
            <h6>{recipe.title}</h6>

            <Link to={`/ProductInfo/${recipe.id}`}>
              <button id="theButton">details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;