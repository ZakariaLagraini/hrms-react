import React, { useEffect, useState } from 'react'
import HistoryAttestationDeVacationService from '../services/HistoryAttestationDeVacationService';
import { Table, TableCell, TableHeader, TableRow } from 'semantic-ui-react';

function HistoryAttestationDeVacation() {

  let [history, setHistory] = useState(null);

  let homService = new HistoryAttestationDeVacationService();

  useEffect(() => {
    homService.getHistoryVacation().then((data) => setHistory(JSON.parse(data)))
  }, []);


  return (
    <>
      <h5>HISTORIQUE DES ATTESTATIONS DE VACATION</h5>
      
      {
        history &&
        <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <TableHeader style={{ backgroundColor: '#e7e7e7' }}>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              ID
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              CIN
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              MODULE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              FILIERE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              SESSION
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              SEMESTRE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              ANNEE UNIVERSITAIRE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              DATE DE CREATION
            </TableCell>
          </TableHeader>
          {history.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.id}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.employee_cin}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.module}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.filiere}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.session}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.semestre}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.annee_universitaire}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.created_at.substring(0, 10)}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      }
    </>
  )
}

export default HistoryAttestationDeVacation