
import { Switch, Route, Link } from "react-router-dom";


import Home from "./components/home";

function App() {


  return (
    <div className="news">
      <div className="news__header">
        <h1>Hacker news</h1>
        <nav className="news__header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">News page</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/news/:id">
            <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}
