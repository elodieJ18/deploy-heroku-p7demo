import React, { useState } from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from 'axios';
import { Login } from "./Login";


export const Signup = () => {
  const [formSubmit, setFormSubmit] = useState(false);

    const validate = Yup.object({
        prenom: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        nom: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        status: Yup.string()
        .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
      })
      
    return (
      <div className="form-signup-content">
      <div className="form-signup-element">
        <>
        {formSubmit ? (
        <>
        <div className="other-way-login">
          <p className="sucess">Enregistrement réussi vous pouvez maintenant vous connecter !</p>
        <Login />
        
        </div>
        </>
        ) : (
       
        <Formik
        initialValues={{
            prenom: '',
            nom: '',
            status: '',
            email: '',  
            password: '',
        }} 
        validationSchema={validate}
        onSubmit={values => {
             axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/auth/signup`, 
                data: values,
                headers: {
                  'Content-Type': 'application/json'
                   },
                  body: JSON.stringify(values),
              })
              .then((res) => {
                if (res.error) { 
                  console.log(res.error);
                  alert("The response data is invalid")
               } else {
                setFormSubmit(true);
                }
              }).catch((err) => {
                let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                alert(message);
                });
            
        }}>
            { formik => (
                <div className="size-column-form">
                    <h1>Signup</h1>
                    
                    <Form>
                        <TextField label="Prenom *" name="prenom" type="text"/>
                        <TextField label="Nom *" name="nom" type="text"/> 
                        <TextField label="Status *" name="status" type="text"/> 
                        <TextField label="Email *" name="email" type="email"/> 
                        <TextField label="password *" name="password" type="password"/>  
                        <button className="btn-bleu btn-connexion" type="submit">Signup</button> 
                        
                    </Form>
                </div>
            )}
        </Formik>
         )}
        </>
      </div>
    </div>
    )
}

