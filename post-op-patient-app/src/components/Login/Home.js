import React from "react";
import { withFormik } from "formik";
<<<<<<< HEAD:post-op-patient-app/src/components/Home.js
import { Button, Form, FormGroup, Input, Card, CardHeader } from 'reactstrap';
import * as Yup from "yup";
=======
import { Button, Form, FormGroup, Label, Input, Card, CardHeader } from 'reactstrap';
import './login.scss'
>>>>>>> 21995ea9b7432d3f4143d7aae71c245f309f3def:post-op-patient-app/src/components/Login/Home.js

function Home(){


  return (
    <div className="home">
<<<<<<< HEAD:post-op-patient-app/src/components/Home.js
      <Card className="login">
      <CardHeader>Log In</CardHeader>
      <Form inline className="login-form">
=======
    <Card className="card-height">
      <h1 className="login-text">Login</h1>
>>>>>>> 21995ea9b7432d3f4143d7aae71c245f309f3def:post-op-patient-app/src/components/Login/Home.js
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <label for="exampleEmail" className="mr-sm-2">Email</label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
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
