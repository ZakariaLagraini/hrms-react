import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import { Table, TableCell, TableHeader, TableRow, Button, Input } from 'semantic-ui-react';

function Employee() {

  let [employee, setEmployee] = useState(null);

  let homService = new EmployeeService();

  useEffect(() => {
    homService.getEmployee().then((data) => setEmployee(JSON.parse(data)))
  }, []);


  return (
    <>
      <h5>LISTES DES EMPLOYES</h5> 
      
      <Button class="ui button" as={Link} to={"/employee-add"} style={{box_sizing:'content-box'}} color='green' >Ajouter un employé </Button>
      <br/>
      
      <br></br>
      {
        employee &&
        <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <TableHeader style={{ backgroundColor: '#e7e7e7' }}>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              ID
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              CIN
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              NOM
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              PRENOM
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              GRADE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              SOM
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              DATE DE FONCTION
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
            
            </TableCell>
          </TableHeader>
          {employee.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.id}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.cin}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.nom}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.prenom}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.grade}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.som}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.date_fonction.substring(0, 10)}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button   class="ui circular blue icon button" style={{ padding: '8px', margin: '8px' }}  > 
                <i class="edit icon"></i>
                </button>
                <button class="ui circular red icon button" style={{ padding: '8px', margin: '8px' }}  > 
                <i class="trash icon"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      }
    </>
  )
}

export default Employee;