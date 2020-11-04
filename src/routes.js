import React from 'react';
import { Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./utils/global-style";
import { Home, Product } from "./pages/";

const Routes = () => {
  return (
    <>
      <GlobalStyled />
      <Switch>
        <Route path="/product" component={
          Product
        }/>
          
        <Route path="/" component={
          Home
        }/>

      </Switch>
    </>
  )
}

export default Routes
