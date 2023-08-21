import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Main';
import Log from './pages/Log';
import New from './pages/New';
import Ticket from './pages/Ticket';
import Service from './pages/Service';
import Mobail from './pages/Monail';
import Header from './component/Header';
import Footer from './component/Footer';







function App() {




  return (

    
    <div className="App">
   
   
  
   <Header />
   
      <Routes>
       <Route path='/' element ={<Home /> } />
        <Route path='/log' element ={<Log styled={('')} />} />
        <Route path='/new' element ={<New />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/service' element={<Service />} />
        <Route path='/mobail' element={<Mobail />} />
   </Routes>
    <Footer />
  
    </div>
    
  );
  }

export default App;



