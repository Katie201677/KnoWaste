import react from 'react';
import { Link, Router } from "@reach/router"
// import { render } from 
import './App.css';

const App =() => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}


export default App;
