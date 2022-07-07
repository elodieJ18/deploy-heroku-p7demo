import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from 'axios';

export const Signup = () => {
    const validate = Yup.object({
        prenom: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        nom: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        status: Yup.string(),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          //.min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
      })
      
    return (
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
                url: `http://localhost:3001/api/auth/signup`,
                withCredentials: true, values,
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
        }}>
            { formik => (
                <div className="size-column-form">
                    <h1>Signup</h1>
                    
                    <Form>
                        <TextField label="Prenom *" name="prenom" type="text"/>
                        <TextField label="Nom *" name="nom" type="text"/> 
                        <TextField label="Status" name="status" type="text"/>
                        <TextField label="Email *" name="email" type="email"/> 
                        <TextField label="password *" name="password" type="password"/>  
                        <button className="btn-bleu" type="submit">Connexion</button>   
                    </Form>
                </div>
            )}
        </Formik>
    )
}