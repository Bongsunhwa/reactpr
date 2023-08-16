import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';
import New from './pages/New';

function App() {
  return (
    <div className="App">
   
      
       <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/log' element ={<Log />} />
        <Route path='/new' element ={<New />} />
     

      </Routes>
    </div>
  );
}

export default App;
