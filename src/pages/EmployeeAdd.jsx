/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import TextInput from "../utilities/customFormControls/TextInput";
import EmployeeAddService from "../services/EmployeeAddService";
import Swal from 'sweetalert2'
import DateTimeInput from "../utilities/customFormControls/DateTimeInput";

export default function EmployeeAdd() { 
  
 let service = new EmployeeAddService();

  const initialValues = {
    cin: "",
    nom:"",
    prenom:"",
    grade:"",
    som:"",
    date_fonction: "",
    admin_id : sessionStorage.getItem("userid"),
  };

  const schema = Yup.object({
    cin: Yup.string().required("Veuillez insérer les données nécessaires."),
    nom: Yup.string().required("Veuillez insérer les données nécessaires."),
    prenom: Yup.string().required("Veuillez insérer les données nécessaires."),
    grade: Yup.string().required("Veuillez insérer les données nécessaires."),
    som: Yup.string().required("Veuillez insérer les données nécessaires."),
    date_fonction: Yup.date().required("Veuillez insérer les données nécessaires."),
  });

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => service.postEmployee(values).then(async function (result) {
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
        <TextInput label="CIN" placeholder="Entrer votre CIN" name="cin" />


        <TextInput
          name="nom"
          label="Nom"
        />


        <TextInput
          name="prenom"
          label="Prenom"
        />


        <TextInput
          name="grade"
          label="Grade"
        />


        <TextInput
          name="som"
          label="Som"
        />

        <DateTimeInput
          name="date_fonction"
          label="Date de fonction"
        />

        <Button color="green" type="submit">
          Ajouter
        </Button>
        <Button as={Link} to={"/employee"} style={{ backgroundColor:'Red', color:'white' }} type="reset">
          Cancel
        </Button>
      </Form>
    </Formik>
  );
}