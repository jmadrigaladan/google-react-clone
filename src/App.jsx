import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResultsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
