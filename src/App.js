import React from 'react';
import './App.css';
import './props.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from "./Component/Home";
import Header from "./Component/Header";
import Products from './Component/Product';
import ProductsContextProvider from "./Component/ProductContext";
import Logo from "./Component/Logo";
import FooterPage from "./Component/Footer";
import Login from "./Component/Container/Login";


function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Logo/>
    <ProductsContextProvider>
      <div className="container">
      <Products/>
      </div>
    </ProductsContextProvider>
    <Route path="/" component={HomePage} />
    <FooterPage/>
    </BrowserRouter>
  );
}




export default App;
