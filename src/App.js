import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


function App() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
                <Landing />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

          </Switch>
        </BrowserRouter>
    </div>
    )
}

export default App;
