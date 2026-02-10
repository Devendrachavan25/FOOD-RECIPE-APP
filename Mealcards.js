import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({ detail }) => {
  return (
    <div className='meals'>
      {!detail ? "" : detail.map((curItem, idx) => {
        return (
          <div className='mealImg' key={idx}>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>

            <NavLink to={`/${curItem.idMeal}`}>
              <button>Recipe</button>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Mealcards
