/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import TextInput from "../utilities/customFormControls/TextInput";
import DateTimeInput from "../utilities/customFormControls/DateTimeInput";
import DemandeDeQuitterTerritoireService from "../services/DemandeDeQuitterTerritoireService";
import Swal from 'sweetalert2'

export default function DemandeDeQuitterTerritoire() { 
  
 let service = new DemandeDeQuitterTerritoireService();

  const initialValues = {
    cin: "",
    quitte_de: "",
    quitte_a:"",
    admin_id : sessionStorage.getItem("userid"),
  };

  const schema = Yup.object({
    cin: Yup.string().required("Veuillez insérer les données nécessaires."),
    quitte_de: Yup.date()
      .required("Veuillez insérer les données nécessaires."),
    quitte_a: Yup.date()
      .required("Veuillez insérer les données nécessaires."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => service.postQuitter(values).then(async function (result) {
        if(result === null || result === undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue!',
        });
      }else {
          console.log(result);
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
        <TextInput label="CIN" placeholder="Entrer votre CIN" name="cin" />


        <DateTimeInput
          name="quitte_de"
          label="Quitter de"
        />

        <DateTimeInput
          name="quitte_a"
          label="Quitter à"
        />  

        <Button color="green" type="submit">
          Générer
        </Button>
      </Form>
    </Formik>
  );
}