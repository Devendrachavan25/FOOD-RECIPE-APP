import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  const handleInput = (event) => {
    setSearch(event.target.value)
  }
  const myFun = async () => {
    if (!search) return

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await res.json()

    setData(jsonData.meals || [])
  }

  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className='container'>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Enter Dish'
          value={search}
          onChange={handleInput} />
      
        <button onClick={myFun}>Search</button>
      </div>
      <Mealcards detail={data} />
    </div>
    </>
  )
}
export default Mainpage
