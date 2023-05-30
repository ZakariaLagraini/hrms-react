import axios from "axios";

export default class HistoryAttestationDeVacationService{

    async getHistoryVacation() {
      var admin = window.sessionStorage.getItem('userid');
        var promise = axios.get("http://localhost:3001/api/history/attestation-de-vacation/", { params : {'admin' : admin}});
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       return data; 
    }
}