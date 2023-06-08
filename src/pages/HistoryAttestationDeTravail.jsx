import React, { useEffect, useState } from 'react'
import HistoryAttestationDeTravailService from '../services/HistoryAttestationDeTravailService';
import { Table, TableCell, TableHeader, TableRow } from 'semantic-ui-react';

function HistoryAttestationDeTravail() {

  let [history, setHistory] = useState(null);

  let homService = new HistoryAttestationDeTravailService();

  useEffect(() => {
    homService.getHistoryAttesta().then((data) => setHistory(JSON.parse(data)))
  }, []);


  return (
    <>
      <h5>HISTORIQUE DES ATTESTATIONS DE TRAVAIL</h5>
      
      {
        history &&
        <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <TableHeader style={{ backgroundColor: '#e7e7e7' }}>
            
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              CIN
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              DATE DE CREATION
            </TableCell>
          </TableHeader>
          {history.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.employee_cin}
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

export default HistoryAttestationDeTravail