import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";

export const Login = () => {

    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          //.min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
      })

   
    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }}   validationSchema={validate}
        onSubmit={values => {
            
            axios({
                method: "post",
                url: `http://localhost:3001/api/auth/login`, values,
              }).then(function (res) {
                console.log("envoie-avant erreur")
                console.log(res);
                console.log(res.values);
                console.log("values");
              }).catch((err) => {
                  console.log(err); 
                  console.log("error-value")
                  console.log(values)
                  console.log("lecture de values après refus")
                });
            console.log(values)
            console.log("test-values")
        }}
        >
            
        { formik => (
          <div className="size-column-form">
          <h1>Login</h1>
           <Form>
                <TextField label="Email" name="email" type="email"/> 
                <TextField label="password" name="password" type="password"/>
                <button className="btn-bleu" type="submit">Se Connecter</button>               
           </Form>
      </div>
        )}
    </Formik>
    )
}