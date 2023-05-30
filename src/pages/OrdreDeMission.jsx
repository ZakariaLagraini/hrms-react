/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import TextInput from "../utilities/customFormControls/TextInput";
import DateTimeInput from "../utilities/customFormControls/DateTimeInput";
import OrdreDeMissionService from "../services/OrdreDeMissionService";
import Swal from 'sweetalert2';

export default function OrdreDeMission() { 

  let service = new OrdreDeMissionService();

  const initialValues = {
    cin: "",
    lieu: "",
    objet: "",
    moyen_transport: "",
    date_depart: "",
    date_retour: "",
    admin_id : sessionStorage.getItem("userid")
  };

  const schema = Yup.object({
    cin: Yup.string().required("Veuillez insérer les données nécessaires."),
    lieu: Yup.string().required("Veuillez insérer les données nécessaires."),
    objet: Yup.string().required("Veuillez insérer les données nécessaires."),
    moyen_transport: Yup.string().required("Veuillez insérer les données nécessaires."),
    date_depart: Yup.date()
      .required("Veuillez insérer les données nécessaires."),
    date_retour: Yup.date()
      .required("Veuillez insérer les données nécessaires."),
  });

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        service.postOrdre(values).then(async function (result) {
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
      }}
    >
      <Form
        className="ui form"
        style={{ padding: "10em" }}
      >
        <TextInput label="CIN" placeholder="Entrer votre CIN" name="cin" />



        <TextInput
          name="lieu"
          placeholder="Se rendre en mission à"
          label="Se rendre en mission à"
        />

        <TextInput
          name="objet"
          placeholder="Objet de mission"
          label="Objet de mission"
        />

        <TextInput
          name="moyen_transport"
          placeholder="Moyen de transport"
          label="Moyen de transport"
        />

        <DateTimeInput
          name="date_depart"
          label="Date de départ"
        />

        <DateTimeInput
          name="date_retour"
          label="Date de retour"
        />

        <Button color="green" type="submit">
          Générer
        </Button>
      </Form>
    </Formik>
  );
}
