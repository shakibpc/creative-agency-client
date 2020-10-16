import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import ServiceList from './Components/PlaceOrder/ServiceList/ServiceList';
import Review from './Components/PlaceOrder/Review/Review';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import AddService from './Components/Admin/AddService/AddService';
import ServiceListAll from './Components/Admin/ServiceListAll/ServiceListAll';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import OrderDashbord from './Components/PlaceOrder/OrderDashbord/OrderDashbord';
import Notice from './Components/Admin/Notice/Notice';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <OrderDashbord></OrderDashbord>
          </PrivateRoute>
          <Route path="/serviceList">
          <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
          <Review></Review>
         </Route>
          <Route path="/admin/addAdmin">
          <AddAdmin></AddAdmin>
          </Route>
          <Route path="/admin/addService">
          <AddService></AddService>
          </Route>
          <Route path="/admin/serviceList">
          <ServiceListAll></ServiceListAll>
          </Route>
          <PrivateRoute path="/admin/stop">
            <Notice></Notice>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
