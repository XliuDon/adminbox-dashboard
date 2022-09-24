import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

async function loginUser(credentials) {
    // return fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(credentials)
    // })
    //   .then(data => data.json())
    return "test token 123abc";
}
// export default class Login extends React.Component {
//     constructor() {
//         super(props);
//         this.animationSettings = { effect: 'Zoom' };
//     }
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange ={e=>setUserName(e.target.value)} required/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange = {e=>setPassword(e.target.value)} required/>
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };