import React from 'react';
import { MainContainer } from './App.style';
import Form from './components/Form';
import ResultsContainer from './components/ResultsContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainCardContainer from './components/MainCardContainer'
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <MainContainer>
        <NavBar/>
        <Route path="/" component={Form}></Route>
        <Route path="/:params" component={ResultsContainer}></Route>
      <MainCardContainer />
      <Footer/>
      </MainContainer>
    </Router>
  );
}

export default App;
