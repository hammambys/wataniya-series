import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TopBar from "./components/Topbar";
import Watch from "./pages/Watch";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="content">
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/watch" component={Watch} />
            </Switch>
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
