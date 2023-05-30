import axios from "axios";
import { saveAs } from 'file-saver';

export default class OrdreDeMissionService{

    async postOrdre(values) {
        var promise = axios.post("http://localhost:3001/api/ordre-de-mission/create", values);
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       await axios.post('http://localhost:3001/api/create-pdf-ordre-de-mission', JSON.parse(data))
       .then(() => axios.get('http://localhost:3001/api/fetch-pdf-ordre-de-mission/', { responseType: 'blob', params : { 'cin' :  JSON.parse(data).cin}}))
       .then((res) => {
         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         saveAs(pdfBlob,  'ordre-de-mission.pdf');
       });
       return data; 
    }
}