import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/common/navBar";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/not-found";
import MovieForm from "./components/common/movieForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Movies} />
        <Route path="/movie-form" component={MovieForm} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
