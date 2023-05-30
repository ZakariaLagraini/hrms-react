import axios from "axios";

export default class HistoryAttestationDeTravailService{

    async getHistoryAttesta() {
      var admin = window.sessionStorage.getItem('userid');
        var promise = axios.get("http://localhost:3001/api/history/attestation-de-travail/", { params : {'admin' : admin}});
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       return data; 
    }
}