import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NoMatch from "src/screens/NoMatch";
import Login from "src/screens/Login";
import useAuth from "src/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideBar from "src/components/Sidebar";
import Header from "src/components/Header";
import User from "src/screens/User";
import Post from "src/screens/Post";
import Banner from "src/screens/Post";
import Session from "src/screens/Session";
import Order from "src/screens/Order";
import Payment from "src/screens/Payment";
import Dashboard from "src/screens/Dashboard";

const routes = [
  {
    path: "/dashboard",
    main: () => <Dashboard />,
  },
  {
    path: "/user",
    main: () => <User />,
  },
  {
    path: "/post",
    main: () => <Post />,
  },
  {
    path: "/session",
    main: () => <Session />,
  },
  {
    path: "/order",
    main: () => <Order />,
  },
  {
    path: "/banner",
    main: () => <Banner />,
  },
  {
    path: "/payment",
    main: () => <Payment />,
  },
];

const MainRoute = (props) => {
  return (
    <div className="bg-gray-100 flex flex-row">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header username="Vũ Long Hải" />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} children={<route.main />} />
            );
          })}
        </Switch>
      </div>
    </div>
  );
};

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
  // Note: NoMatch route must at the end, all other route (login, register,...) before MainRoute
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AppRouteWithAuth path="/">
            <MainRoute />
          </AppRouteWithAuth>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
