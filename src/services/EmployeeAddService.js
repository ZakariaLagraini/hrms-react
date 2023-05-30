import axios from "axios";


export default class AttestationDeVacationService{

    async postEmployee(values) {
        var promise = axios.post("http://localhost:3001/api/employee-add/add", values);
        var data = null;
         await promise.then((result) =>  data = JSON.stringify(result.data));
         return data; 
    }
}