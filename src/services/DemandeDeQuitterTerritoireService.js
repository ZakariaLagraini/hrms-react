import axios from "axios";
import { saveAs } from 'file-saver';

export default class DemandeDeQuitterTerritoireService{

    async postQuitter(values) {
        var promise = axios.post("http://localhost:3001/api/demande-de-quitter-territoire/create", values);
        var data = null;
         await promise.then((result) =>  data = JSON.stringify(result.data));
       await axios.post('http://localhost:3001/api/create-pdf-demande-de-quitter-territoire', JSON.parse(data))
       .then(() => axios.get('http://localhost:3001/api/fetch-pdf-demande-de-quitter-territoire/', { responseType: 'blob', params : { 'cin' :  JSON.parse(data).cin}}))
       .then((res) => {
         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         saveAs(pdfBlob,  'demande-de-quitter-territoire.pdf');
       });
       return data; 
    }
}