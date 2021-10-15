import "./App.css";
import Test from "./test";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
