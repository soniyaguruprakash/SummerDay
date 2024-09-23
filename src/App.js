import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Category from './Components/Category';
import Icecream from './Components/Icecream';
import Juice from './Components/Juice';



function App() {
  return (
    <div>
      <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/ice' element={< Icecream />} />
                    <Route path='/juice' element={< Juice />} />
                    
                    
      </Routes>
    </div>
  );
}

export default App;
