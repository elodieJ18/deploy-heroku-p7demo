import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";

export const Login = () => {

    const validate = Yup.object({
        "email": Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        "password": Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
      })
      
    return (
      <div className="form-signup-content">
      <div className="form-signup-element">
        <Formik initialValues={{
            email: "",
            password: "",
        }} 
        validationSchema={validate} onSubmit={values => {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/auth/login`, 
            data: values,
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
               },
              body: JSON.stringify(values),
          }).then((response) => {
            return response.data;
          }).then((res) => {
            if (res.error) { 
              console.log(res.error);
              alert("The response data is invalid")
            } else {
              window.location = "/";
            }
          })
          .catch((err) => {
            let errorMessage = typeof err.response !== "undefined" ? err.response.data.message : err.message;
            alert(errorMessage);
          });
        }}
        
        >
            
        { formik => (
          <div className="size-column-form">
          <h1>Login</h1>
           <Form>
                <TextField label="Email" name="email" type="email"/> 
                <TextField label="password" name="password" type="password"/>
                <button className="btn-bleu btn-connexion" type="submit">Login</button> 
           </Form>
      </div>
        )}
    </Formik>
    </div>
    </div>
    )
}

