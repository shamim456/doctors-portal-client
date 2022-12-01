import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

import Appoinment from "./Pages/Appoinment/Appoinment";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment";
import MyReview from "./Pages/Dashboard/MyReview";
import History from "./Pages/Dashboard/History";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth><Appoinment></Appoinment></RequireAuth>
          }
        ></Route>

        
        <Route
          path="/dashboard"
          element={
            <RequireAuth><Dashboard></Dashboard></RequireAuth>
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route path="user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>


        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
