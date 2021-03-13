import './App.css';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; 
import Confirmed_Patients from './Confirmed_Patients';
import Current_Cases from './Current_Cases';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Admin_Dashboard from './Admin_Dashboard';
import Doctor_Dashboard from './Doctor_Dashboard';
import Researcher_Dashboard from './Researcher_Dashboard'; 
import Add_Hospital from './Add_Hospital';
import Delete_Member from './Delete_Member';
import Delete_Hospital from './Delete_Hospital';
import View_Details from './View_Details';
import Register_Member from "./Register_Member";
import Hospital_List from './Hospital_List';
import UserProfile from './UserProfile';
import Complaints from './Complaints';
import Report_Issue from './Report_Issue';
import View_Edit from "./View_Edit";
import Compaign_Request from "./Compaign_Request";
const App= ()=> {
  return (
    <>
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/Login/' component = {Login} />
        <Route exact path='/Profile/' component = {UserProfile} />
        <Route exact path='/UserProfile/' component = {UserProfile} />        
        <Route exact path='/Current_Cases/' component = {Current_Cases} />
        <Route exact path='/Confirmed_Patients/' component = {Confirmed_Patients} />
        <Route exact path='/Complaints/' component = {Complaints} />        
        <Route exact path='/Admin_Dashboard/' component = {Admin_Dashboard} />
        <Route exact path='/Researcher_Dashboard/' component = {Researcher_Dashboard} />
        <Route exact path='/Doctor_Dashboard/' component = {Doctor_Dashboard} />        
        <Route exact path='/Register_Member/' component = {Register_Member} />        
        <Route exact path='/Delete_Member/' component = {Delete_Member} />        
        <Route exact path='/Add_Hospital/' component = {Add_Hospital} />        
        <Route exact path='/Delete_Hospital/' component = {Delete_Hospital} />
        <Route exact path='/View_Details/' component = {View_Details} />
        <Route exact path='/Hospital_List/' component = {Hospital_List} />
        <Route exact path='/View_Edit/' component = {View_Edit} />
        <Route exact path='/Compaign_Request/' component = {Compaign_Request} />
        
        <Route exact path='/Report_Issue/' component = {Report_Issue} />
      </Switch>
    </Router> 
{/* 
      <Home/>
      <Login/> */}
        <ScrollUpButton style={{backgroundColor:"white"}} />
        </div></>
  );
};

export default App;
