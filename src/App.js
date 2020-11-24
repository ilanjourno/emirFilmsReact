import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header";
import MoviesPage from "./Screens/Movies";
import AddMoviePage from './Screens/AddMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>

          <div>

              <Header></Header>

              <Switch>

                  <Route path="/" exact>
                      <span> HOME </span>
                  </Route>

                  <Route path="/movies" exact>
                      <MoviesPage />
                  </Route>

                  <Route path="/add-movies" exact>
                    <AddMoviePage/> 
                  </Route>

                  <Route>
                      <span> 404 ! </span>
                  </Route>

              </Switch>

          </div>

      </Router>
  );
}

export default App;