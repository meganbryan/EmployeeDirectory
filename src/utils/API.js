import axios from "axios";
const count = 50
// eslint-disable-next-line 
export default {
  getEmployee: function() {
    return axios.get(`https://randomuser.me/api/?results=${count}&nat=us`);
  }
};
