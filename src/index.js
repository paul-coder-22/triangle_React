import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Area from './Area/Area';
import Angles from './Angle/Angles';
import Hypotenuse from './Hypotenuse/Hypotenuse';
import Quizz from './Quiz/Quizz';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Triangles App</h1>
        </div>
        <nav className="nav-item">
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Area">Area</Link>
            </li>
            <li>
              <Link to="/Angles">Angles</Link>
            </li>
            <li>
              <Link to="/Hypotenuse">Hypotenuse</Link>
            </li>
            <li>
              <Link to="/Quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Area" component={Area} />
          <Route path="/Angles" component={Angles} />
          <Route path="/Hypotenuse" component={Hypotenuse} />
          <Route path="/Quiz" component={Quizz} />
        </Switch>

        <div className="footer-container">
          <div className="footer-icon">
            <div className="footer-icon1"> <a href="https://github.com/paul-coder-22/triangle_React.git"><i
              className="fab fa-github fa-2x"></i> </a></div>
            <div className="footer-icon2"><a href="https://www.linkedin.com/in/kiron-paul-1b81111b1/"><i
              className="fab fa-linkedin fa-2x"></i></a></div>
            <div className="footer-icon3"><a href="https://twitter.com/pulmicheal1"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
