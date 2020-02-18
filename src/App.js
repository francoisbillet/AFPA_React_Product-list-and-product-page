import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main className="content">
              <ProductList />
            </main>
          </div>
        </Route>

        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
