// import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import MealInfo from './Component/Mealinfo';
import './index.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    
      //<Mainpage/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid'element={<MealInfo/>}/>
    </Routes>

    
  );
}

export default App;
