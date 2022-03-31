import axios from "axios";

export class UserData {


    static getAllUsers(){
        // return this.users    // example with static data
        let dataUrl = "https://jsonplaceholder.typicode.com/users"
        return axios.get(dataUrl)
    }
}