import React from "react";
import { withFormik } from "formik";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader } from 'reactstrap';
import './login.scss'

function Home(){
  return (
    <div className="home">
    <Card className="card-height">
      <h1 className="login-text">Login</h1>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
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

})(Home);

export default Home;
