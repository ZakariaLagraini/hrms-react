import axios from "axios";

export default class UserService{
    login(values) {
       var promise = axios.post("http://localhost:3001/api/users/login", values);
       const data = promise.then((result) => result.data);
       return data;
    }
}
