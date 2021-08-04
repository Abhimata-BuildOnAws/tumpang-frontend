import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Signup = () => {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory();

    async function signUp() {
        try {
            const { user } = await Auth.signUp(email, password,
            );
            console.log(user);
            history.push('/dashboard')
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    

    return (
        <div>
            <form>
                <label className=""> Email </label>

                <input
                type="email"
                className=""
                placeholder="Email"
                onChange = {e => setEmail(e.target.value)}
                />

                <label className="" htmlFor="grid-password">Password</label>

                <input
                type="password"
                className=""
                placeholder="Password"
                onChange = {e => setPassword(e.target.value)}
                />

                <button
                className=""
                type="button"
                onClick={() => signUp()}
                >
                Sign Up
                </button>

            </form>
        </div>
    )
}

export default Signup
