import React from 'react';
import './App.css'
// import Cards from "./components/cards/cards"
import Header from "./components/header/Header"
import MovieDetail from "./pages/movieDetail/movie"
import AllMovies from "./pages/movieList/AllMovies"
import MyFavourite from "./pages/movieList/myFavourite"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                 <Switch>
                <Route exact path="/"><AllMovies /></Route>
                <Route path="/AllMovies/movie/:id"><MovieDetail /></Route>
                <Route path="/my-favourite"><MyFavourite /></Route>
                <Route path="/:anything"><Redirect to="/"></Redirect></Route>
                </Switch> 
            </Router>
        </div>
    )
}

export default App;
