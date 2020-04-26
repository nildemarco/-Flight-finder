import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import ResultsContainer from './components/ResultsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const MainContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
const App = () => {
  return (
    <Router>
      <MainContainer>
        <Route path="/" component={Form}></Route>
        <Route path="/:params" component={ResultsContainer}></Route>
      </MainContainer>
    </Router>
  );
}

export default App;
