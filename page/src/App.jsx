import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import NavigationBar from "./components/NavBar";
import SignUpPage from "./pages/signUp/SignUpPage";
import MainDashBoard from "./pages/Dashboards/mainDashBoard";
import HelperDetails from "./pages/Employee/HelperDetails";
import EstateDetailsPage from "./pages/Estate/EstateDetails";
// import VfaDetails from "./pages/VfaDetails"; 

import  Footer from "./components/Footer/footer";
import Cfa from "./pages/SupervisiorPages/Cfa";
import Fillingbill from "./pages/SupervisiorPages/Fillingbill";
import Estatereport from "./pages/SupervisiorPages/Estatereport";
import FormComponent from "./pages/SupervisiorPages/FormComponent";
import Lastcollection from "./pages/SupervisiorPages/Lastcollection";
import Order from "./pages/SupervisiorPages/Order";
import Pfa from "./pages/SupervisiorPages/Pfa";
import Planning from "./pages/SupervisiorPages/planning";
import RouteTable from "./pages/SupervisiorPages/RouteTable";
import Todaytapping from "./pages/SupervisiorPages/Todaytapping";
import Home from  "./pages/SupervisiorPages/Home";

import TopicBox from "./components/SupervisiorNav/TopicBox";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/navbar" element={<NavigationBar />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
        <Route path="/helper" element={<HelperDetails />} />
        <Route path="/estate" element={<EstateDetailsPage />} /> 
        <Route path="/FormComponent" element={<FormComponent/>} />
        <Route path="/Cfa" element={<Cfa />} /> 
        <Route path="/fillingbill" element={<Fillingbill />} /> 
        <Route path="/Estatereport" element={<Estatereport/>} /> 
        <Route path="/Lastcollection" element={<Lastcollection/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Pfa" element={<Pfa/>} />
        <Route path="/Planning" element={<Planning/>} />
        <Route path="/RouteTable" element={<RouteTable/>} />
        <Route path="/Todaytapping" element={<Todaytapping/>} />
        <Route path="/topicbox" element={<TopicBox/>} />
        <Route path="/Home" element={<Home/>} />
       





        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
