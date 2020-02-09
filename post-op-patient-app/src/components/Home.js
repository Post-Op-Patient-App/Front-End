import React from "react";
import { withFormik } from "formik";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader } from 'reactstrap';


function Home(){
  return (
    <div className="home">
      <h1>This is the home page and it will have a log in form here</h1>
      <Card className="login">
      <CardHeader>Log In</CardHeader>
      <Form inline className="login-form">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="password" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Card>
    </div>
  )
}

const FormikHome = withFormik({

})(Home);

export default Home;
