import axios from "axios";

export default class HistoryDemandeDeQuitterTerritoireService{

    async getHistoryDemande() {
      var admin = window.sessionStorage.getItem('userid');
        var promise = axios.get("http://localhost:3001/api/history/demande-de-quitter-territoire/", { params : {'admin' : admin}});
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       return data; 
    }
}