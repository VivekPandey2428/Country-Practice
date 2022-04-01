import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Component/Home';
import Country from './Component/Country';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Country' element={<Country/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
