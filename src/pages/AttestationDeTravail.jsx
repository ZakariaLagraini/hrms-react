/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import TextInput from "../utilities/customFormControls/TextInput";
import AttestationDeTravailService from "../services/AttestationDeTravailService";
import Swal from 'sweetalert2'

export default function AttestationDeTravail() { 
  
 let service = new AttestationDeTravailService();

  const initialValues = {
    cin: "",
    admin_id : sessionStorage.getItem("userid"),
  };

  const schema = Yup.object({
    cin: Yup.string().required("Veuillez insérer les données nécessaires."),
  });

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => service.postAttestation(values).then(async function (result) {
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

        <h2>ATTESTATION DE TRAVAIL</h2>
        <TextInput label="CIN" placeholder="Entrer votre CIN" name="cin" />


        <Button color="green" type="submit">
          Générer
        </Button>
      </Form>
    </Formik>
  );
}
