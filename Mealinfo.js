import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function MealInfo() {
  const { mealid } = useParams()
  const navigate = useNavigate()
  const [info, setInfo] = useState(null)

  const getInfo = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    )
    const jsonData = await res.json()
    setInfo(jsonData.meals[0])
  }

  useEffect(() => {
    getInfo()
  }, [mealid])

  return (
    <div>
      {/* ✅ Back Button */}
      {!info ? (
        <h2>Data Not Found</h2>
      ) : (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />

          <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
             <button onClick={() => navigate(-1)}>Back</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MealInfo
