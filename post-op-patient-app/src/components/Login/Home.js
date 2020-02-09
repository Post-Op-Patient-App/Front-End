import React from "react";
import { Formik, withFormik } from "formik";
import { Button, FormGroup, Form, Input, Card, CardHeader } from 'reactstrap';
import * as Yup from "yup";
import './login.scss'

function Home(){


  return (
    <div className="home">
      <Card className="login">
      <CardHeader>Log In</CardHeader>
      <Form inline className="login-form">
    <Card className="card-height">
      <h1 className="login-text">Login</h1>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <label for="email" className="mr-sm-2">Email</label>
        <Input type="email" name="email" id="email" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <label for="password" className="mr-sm-2">Password</label>
        <Input type="password" name="password" id="password" placeholder="don't tell!" />
      <Button style={{
        backgroundColor: '#ACDDE9',
        textAlign: 'center',
        width: '100%',
        marginTop: '10px'
      }}
      className="login-btn">Login</Button>
      </FormGroup>
    </Card>
      </Form>
      </Card>
    </div>
  )
}

const FormikHome = withFormik({
  mapPropsToValues({email, password}){
    return{
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  }),

})(Home);

export default Home;
