import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import Amplify from 'aws-amplify'
import axios from 'axios'

import About from './pages/public/About';
import Dashboard from "./pages/dashboard/Dashboard";
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import config from './aws-exports';
import Signup from './pages/public/Signup'


Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});


function App() {
  axios.defaults.baseURL = "https://fevu7x9mx0.execute-api.ap-southeast-1.amazonaws.com/RX"
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'true'
  // axios.defaults.headers.post['Access-Control-Request-Method'] = 'POST'



  return (

    <Switch>
      <Route exact path='/' component={ Home }  />
      <Route path='/about' component={ About }  />

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

    </Switch>
  )
}

export default App
