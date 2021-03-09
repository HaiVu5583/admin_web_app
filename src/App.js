import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "src/screens/Home";
import NoMatch from "src/screens/NoMatch";
import Login from "src/screens/Login";
import useAuth from "src/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRouteWithAuth = ({ children, ...rest }) => {
  let { username } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <AppRouteWithAuth exact path="/">
            <Home />
          </AppRouteWithAuth>
          <AppRouteWithAuth path="/home">
            <Home />
          </AppRouteWithAuth>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
