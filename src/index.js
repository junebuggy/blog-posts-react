import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import unFound from './NotFound';
import PostDashboard from './PostDashboard';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/post/:id" component={PostDashboard} />
        <Route component={unFound} />
      </Switch>
    </div>
  </Router>
)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
