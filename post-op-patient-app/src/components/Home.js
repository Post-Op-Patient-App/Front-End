import React from "react";
import { withFormik } from "formik";
import { Button, Form, FormGroup, Input, Card, CardHeader } from 'reactstrap';
import * as Yup from "yup";

function Home(){


  return (
    <div className="home">
      <Card className="login">
      <CardHeader>Log In</CardHeader>
      <Form inline className="login-form">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <label for="exampleEmail" className="mr-sm-2">Email</label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <label for="password" className="mr-sm-2">Password</label>
        <Input type="password" name="password" id="password" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
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
