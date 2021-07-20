import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";


import About from './pages/public/About';
import Dashboard from "./pages/dashboard/Dashboard";
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import useToken from "./components/auth/useToken";

function App() {
  
  const { token, setToken } = useToken();
  console.log(token)

  return (

    <Switch>
      <Route exact path='/' component={ Home }  />
      <Route path='/about' component={ About }  />

      <Route path='/login'>
        <Login setToken={setToken} />
      </Route>

      <Route path="/dashboard">
        {token ? <Dashboard /> : <Redirect to="/login" />}
      </Route>

    </Switch>
  )
}





export default App;
