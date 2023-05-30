import React, { useEffect, useState } from 'react'
import HistoryOrdreDeMissionService from '../services/HistoryOrdreDeMissionService';
import { Table, TableCell, TableHeader, TableRow } from 'semantic-ui-react';

function HistoryOrdreDeMission() {

  let [history, setHistory] = useState(null);

  let homService = new HistoryOrdreDeMissionService();

  useEffect(() => {
    homService.getHistory().then((data) => setHistory(JSON.parse(data)))
  }, []);


  return (
    <>
      <h5>HISTORIQUE DES ORDRES DE MISSION</h5>
      
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
              LIEU
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              OBJET
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              MOYEN DE TRANSPORT
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              DATE DE DEPART
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
              DATE DE RETOUR
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
                {entry.lieu}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.objet}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.moyen_transport}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.date_depart.substring(0, 10)}
              </TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>
                {entry.date_retour.substring(0, 10)}
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

export default HistoryOrdreDeMission