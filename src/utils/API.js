import axios from "axios";
// eslint-disable-next-line 
export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/");
  }
};
