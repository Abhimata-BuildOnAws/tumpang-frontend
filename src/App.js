import { useEffect, useState } from "react"; 
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import Amplify from 'aws-amplify'
import { Auth } from 'aws-amplify';
import axios from 'axios'

import About from './pages/public/About';
import Dashboard from "./pages/dashboard/Dashboard";
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import config from './aws-exports';


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


  // const history = useHistory();
  // const [user, setUser] = useState();
  // const check = async() => {
  //   try{
  //     const { attributes } = await Auth.currentAuthenticatedUser();
  //     setUser(attributes);
  //   }
  //   catch(e){
  //     history.push('/login')
  //   }
  // };
  // useEffect( () => { 
  //   check(); 
  // }, []);
  // const userId = user?.["sub"];


  // useEffect(() => {
  //   axios.post(`/tumpang/emission_history2`, {
  //     user_id: "3158a7dd-6eeb-4d40-9b51-fded7fc3a814",
  //     month_range: 6
  //     // page: 1
  //   })
  //   .then((res) => {
  //       console.log(res.data)
  //   });
  // }, []);


  return (

    <Switch>
      <Route exact path='/' component={ Home }  />
      <Route path='/about' component={ About }  />

      <Route path='/login'>
        <Login />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

    </Switch>
  )
}

export default App
