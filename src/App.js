import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import TopBar from "./components/Topbar";

function App() {
  return (
    <>
      <TopBar />
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
