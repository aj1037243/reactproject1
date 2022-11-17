import React from 'react'
import {useHistory} from 'react-router-dom'
import Home from './Home';
function LoginForm() {

    let history = useHistory();

    return(

    <div className="create">
    <h2> Sign in</h2>
    <form>
      <label>Username</label>
      <input type="text" 
        required 
      />
      <label>Password</label>
      <input type="password" required></input>

      <label> Email Confirmation</label>
        <input type="email"></input>

        <button type='submit'onClick= {() => {history.push("./home")}}> Sign in</button>
    </form>
  </div>
);
}

export default LoginForm