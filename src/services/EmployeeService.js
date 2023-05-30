import axios from "axios";

export default class EmployeeService{

    async getEmployee() {
      var admin = window.sessionStorage.getItem('userid');
        var promise = axios.get("http://localhost:3001/api/getEmployee/show/", { params : {'admin' : admin}});
        var data = null;
         await promise.then((result) => data = JSON.stringify(result.data));
       return data; 
    }
}