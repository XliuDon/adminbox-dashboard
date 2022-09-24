import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from "react";
import  Button  from '../../components/Button';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useStateContext } from '../../contexts/ContextProvider';

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

export default function Login2({ setToken }) {
    const {currentColor } = useStateContext();

    let formObject = null;
    const userNameRef = useRef(null);
    const initialState = { username: '', password: '' };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: action.value };
            default:
                return initialState;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const update = (field) => (event) => {
        //update action is dispatched to update the username and password state value
        dispatch({ type: 'update', field, value: event.value });
    };

    useEffect(() => {
        userNameRef.current.focusIn();
        const options = {
            // validation rules
            rules: {
                username: {
                    required: [true, '* Please enter your email'],
                },
                password: {
                    required: [true, '* Please enter your password'],
                }
            },
        };
        // Initialize the form validator
        formObject = new FormValidator('#form1', options);
    }, []);

    const onSubmit = async e => {
      e.preventDefault();  
      if (formObject.validate()) {
          formObject.element.reset();
          const token = 'tst';
          setToken(token);
      }                
    };

    return (<div>
      <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">User Login</h3>
        <div className="control_wrapper textbox-form">
          <form id="form1" method="post">
            <div className="form-group">
              <TextBoxComponent ref={userNameRef} type="username" name="username" value={state.username} change={update('username')} placeholder="Username" floatLabelType="Auto" data-msg-containerid="errroForUsername"/>
              <div id="errroForUsername"/>
            </div>
            <div className="form-group">
              <TextBoxComponent type="password" name="password" value={state.password} change={update('password')} placeholder="Password" floatLabelType="Auto" data-msg-containerid="errroForPassword"/>
              <div id="errroForPassword"/>
            </div>
          </form>
          <div className="submitBtn">
            <Button onClick={onSubmit} color="white" bgColor={currentColor} text="Login" borderRadius="10px" size="md"/>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>);
}