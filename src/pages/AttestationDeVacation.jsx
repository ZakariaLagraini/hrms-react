/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import TextInput from "../utilities/customFormControls/TextInput";
import AttestationDeVacationService from "../services/AttestationDeVacationService";
import Swal from 'sweetalert2'

export default function AttestationDeVacation() { 
  
 let service = new AttestationDeVacationService();

  const initialValues = {
    cin: "",
    module:"",
    filiere:"",
    session:"",
    semestre:"",
    annee_universitaire: "",
    admin_id : sessionStorage.getItem("userid"),
  };

  const schema = Yup.object({
    cin: Yup.string().required("Veuillez insérer les données nécessaires."),
    module: Yup.string().required("Veuillez insérer les données nécessaires."),
    filiere: Yup.string().required("Veuillez insérer les données nécessaires."),
    session: Yup.string().required("Veuillez insérer les données nécessaires."),
    semestre: Yup.string().required("Veuillez insérer les données nécessaires."),
    annee_universitaire: Yup.string().required("Veuillez insérer les données nécessaires."),
  });

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => service.postVacation(values).then(async function (result) {
        if(result === null || result === undefined) Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue!',
        });
        else {
          await Swal.fire({
            icon: 'success',
            title: 'Ajouté',
            text: 'L\'opération a été éfféctuer avec succes!',
          });
          window.location.reload();
        }
      }).catch((result) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue!',
        });
      })
    }
    >
      <Form
        className="ui form"
        style={{ padding: "10em"}}
      >
        <h2>ATTESTATION DE VACATION</h2>
        <TextInput label="CIN" placeholder="Entrer votre CIN" name="cin" />


        <TextInput
          name="module"
          label="Module"
        />


        <TextInput
          name="filiere"
          label="Filiére"
        />


        <TextInput
          name="session"
          label="Session"
        />


        <TextInput
          name="semestre"
          label="Semestre"
        />

        <TextInput
          name="annee_universitaire"
          label="Année Universitaire"
        />

        <Button color="green" type="submit">
          Générer
        </Button>
      </Form>
    </Formik>
  );
}