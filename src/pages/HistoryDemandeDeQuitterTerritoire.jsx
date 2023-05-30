import React, { useEffect, useState } from 'react'
import HistoryDemandeDeQuitterTerritoireService from '../services/HistoryDemandeDeQuitterTerritoireService';
import { Table, TableCell, TableHeader, TableRow } from 'semantic-ui-react';

function HistoryDemandeDeQuitterTerritoire() {

  let [history, setHistory] = useState(null);

  let homService = new HistoryDemandeDeQuitterTerritoireService();

  useEffect(() => {
    homService.getHistoryDemande().then((data) => setHistory(JSON.parse(data)))
  }, []);


  return (
    <>
      <h5>HISTORIQUE DES DEMANDES DE QUITTER LE TERRITOIRE</h5> 
      <br></br>
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
              QUITTER DE
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              QUITTER A
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
                {entry.quitte_de.substring(0, 10)}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.quitte_a.substring(0, 10)}
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

export default HistoryDemandeDeQuitterTerritoire