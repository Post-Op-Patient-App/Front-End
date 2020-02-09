import React, { useState } from "react";
import { withFormik } from "formik";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader } from 'reactstrap';
import './login.scss'
import { axiosWithAuth } from "../Utils/AxiosWithAuth";
import {useHistory} from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  })
  const history = useHistory();

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Credentials: ", credentials)
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        history.push("/")
      })
      .catch(err => console.log(err))
  }
  return (
    <form className="home" onSubmit={handleSubmit}>
    <Card className="card-height">
      <h1 className="login-text">Login</h1>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="login" className="mr-sm-2">Username</Label>
        <Input
        type="text"
        name="userName"
        id="username" placeholder="cool"
        onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Input
        type="password"
        name="password"
        id="password"
        placeholder="don't tell!"
        onChange={handleChanges}
         />
      <Button style={{
        backgroundColor: '#ACDDE9',
        textAlign: 'center',
        width: '100%',
        marginTop: '10px'
      }}
      className="login-btn">Login</Button>
      </FormGroup>
    </Card>
    </form>
  )
}


export default Login;
