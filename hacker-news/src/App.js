import { Switch, Route, Link } from "react-router-dom";

import { Home } from "./components/home";
import { About } from "./components/About";
import { News } from "./components/News";

function App() {
  return (
    <div className="news">
      <div className="news__header">
        <a href="/" className="logo">
          Hacker news
        </a>
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
          <News />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
