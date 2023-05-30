import React from "react";
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import UserService from "../services/UserService";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from 'sweetalert2'


export default function Login() {
  
  let userService = new UserService();
  const userLoginSchema = Yup.object().shape({
    auth: Yup.string().required("Ce champ doit être rempli"),
    password: Yup.string().required("Ce champ doit être rempli")
  })

  const formik = useFormik({
    initialValues: {
      auth:"",
      password:""
    },
    validationSchema: userLoginSchema,
    onSubmit:(values) => {
      userService.login(values).then(function (result) {
        if(result.length === 0)  Swal.fire({
          icon: 'error',
          text: 'Veuillez vérifier les données insérées!',
        });
        else {
          window.sessionStorage.setItem("userid", result[0].id);
          window.sessionStorage.setItem("username", result[0].username);
          window.location.href = "/";
        }
      }).catch((result) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue!',
        });
      })

    }
  })

  return (
    <div>
      <Header as="h2" color="teal" textAlign="center">
         Login
      </Header>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment stacked>
          <div>
          <label><b>Email</b></label>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail "
            name="auth"
            value={formik.values.auth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.auth && formik.touched.auth && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.auth}
              </div>
            )
          }
          </div>
          <div style={{marginTop:"1em"}}>
          <label><b>Mot de passe</b></label>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="mot de passe"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.password && formik.touched.password && (
              <div className={"ui pointing red basic label"}>
                {formik.errors.password}
              </div>
            )
          }
          </div>

          <Button color="teal" fluid size="large" type="submit" style={{marginTop:"1em"}}>
            Connexion
          </Button>
        </Segment>
      </Form>
    </div>
  );
}