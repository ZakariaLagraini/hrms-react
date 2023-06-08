import axios from "axios";
import { saveAs } from 'file-saver';

export default class AttestationDeTravailService{

   async postAttestation(values) {
        var promise = axios.post("http://localhost:3001/api/attestation-de-travail/create", values);
        var data = null;
         await promise.then((result) =>  data = JSON.stringify(result.data));
       await axios.post('http://localhost:3001/api/create-pdf-attestation-de-travail', JSON.parse(data))
       .then(() => axios.get('http://localhost:3001/api/fetch-pdf-attestation-de-travail/'+JSON.parse(data).cin, { responseType: 'blob'}))
       .then((res) => {
         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         saveAs(pdfBlob,  'attestation-de-travail.pdf');
       });
       return data; 
    }
}