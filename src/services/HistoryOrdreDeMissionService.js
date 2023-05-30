import axios from "axios";

export default class HistoryOrdreDeMissionService{

    async getHistory() {
      var admin = window.sessionStorage.getItem('userid');
        var promise = axios.get("http://localhost:3001/api/history/ordre-de-mission/", { params : {'admin' : admin}});
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       return data; 
    }
}