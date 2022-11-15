import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/Appoinment/Appoinment';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>} ></Route>    
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
      <h1>shamim</h1>
    </div>
  );
}

export default App;
