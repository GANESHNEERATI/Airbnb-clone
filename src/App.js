import React from 'react';

import './App.css';
import Home from './Home/Home'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import {BrowserRouter as Router,Switch,Route}     from 'react-router-dom'
import SearchPage from './Search/SearchPage';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
      <Switch>


        {/* search page */}
      <Route path="/search">
      <SearchPage />
      </Route> 
      {/* Home page */}
      <Route path="/">
      <Home /> 
      </Route>

      
      </Switch>
      <Footer/>
          </Router>

  


    </div>
  );
}

export default App;
