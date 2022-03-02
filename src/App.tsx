import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";


import './App.css';
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
     return(
      <Provider store={store}>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:deliveryID" element={<Details/>} />
      </Routes>
     </Router>
    </Provider>
      )
 }

export default App;
