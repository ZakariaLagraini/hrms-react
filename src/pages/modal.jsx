import React, { useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import EmployeeService from '../services/EmployeeService';
import Swal from 'sweetalert2'

export default function ModalExampleModal({ entry }) {
  const [open, setOpen] = useState(false);
  const [cin, setCin] = useState(entry.cin);
  const [nom, setNom] = useState(entry.nom);
  const [prenom, setPrenom] = useState(entry.prenom);
  const [grade, setGrade] = useState(entry.grade);
  const [som, setSom] = useState(entry.som);
  const [dateFonction, setDateFonction] = useState(entry.date_fonction.substring(0, 10));

  const employeeService = new EmployeeService();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const updatedEmployee = {
      id: entry.id,
      cin: cin,
      nom: nom,
      prenom: prenom,
      grade: grade,
      som: som,
      date_fonction: dateFonction,
    };

    employeeService.updateEmployee(updatedEmployee)
      .then(async () => {
        await Swal.fire({
            icon: 'success',
            title: 'Modifié',
            text: 'L\'opération a été éfféctuer avec succes!',
          });
        setOpen(false);
        window.location.reload();
      })
      .catch(async (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Une erreur est survenue!',
          });
      });
  };

  return (
    <Modal
      onClose={handleClose}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="ui circular blue icon button" style={{ padding: '8px', margin: '8px' }}>
          <i className="edit icon"></i>
        </button>
      }
    >
      <Modal.Header>{entry.cin}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>CIN</label>
            <input type="text" name="cin" value={cin} readOnly />
          </Form.Field>
          <Form.Field>
            <label>NOM</label>
            <input type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>PRENOM</label>
            <input type="text" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>GRADE</label>
            <input type="text" name="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>SOM</label>
            <input type="text" name="som" value={som} onChange={(e) => setSom(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>DATE DE FONCTION</label>
            <input
              type="date"
              name="date_fonction"
              value={dateFonction}
              onChange={(e) => setDateFonction(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleClose}>
          Annuler
        </Button>
        <Button content="Enregistrer" labelPosition="right" icon="checkmark" onClick={handleSave} positive />
      </Modal.Actions>
    </Modal>
  );
}
