
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import Cart from './component/Cart'
import Email from './Email';
import Futter from './Futter';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      
       <div>
        <Routes>
        <Route path='/' exact element={<Login/>} />  </Routes>
        
        <Routes>
           
          <Route path='/Home' exact element={<Home/>} />
          <Route path='/Cart' exact element={<Cart/>} />
          <Route path='/Email' exact element={<Email/>} />
          
          
        </Routes>
        
       </div>
      
    </BrowserRouter>
  
  );
}

export default App;
