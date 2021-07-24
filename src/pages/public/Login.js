import { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Navbar from '../../components/public/Navbar'

const Login = ({ setToken }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory();


  const handleSubmit = async event => {
    event.preventDefault()

  //   //this function will login the user - change url to backend in production
  //   axios.post('http://localhost:8080/login', {email, password})
  //   .then(function(res){
  //     setToken(res.data)
  //     console.log(res.data)
      history.push("/dashboard");
  //   })
  //   .catch(function(error){
  //     console.log(error)
  //   })
  }

  return (
    <> 
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/takeout.jpg").default + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
        ></div>

      <Navbar isDark={true} />

        
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  
                  <div className="p-4 text-gray-500 text-center mb-3 font-bold">
                    <h1 className='p-4'>Log in to your account</h1>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password"> Email </label>

                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                        onChange = {e => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>

                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style={{ transition: "all .15s ease" }}
                        onChange = {e => setPassword(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5" style={{ transition: "all .15s ease" }} />
                        <span className="ml-2 text-sm font-semibold text-gray-700"> Remember me </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Log In
                      </button>

                    </div>
                  </form>
                </div>
              </div>


              <div className="flex flex-wrap mt-6 text-gray-300">
                <small>If you do not have an account, please make one with the mobile app</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
