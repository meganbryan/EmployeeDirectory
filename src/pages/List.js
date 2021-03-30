import React, { Component } from "react";
import API from "../utils/API";
import HeadingRow from "../components/HeadingRow";
import EmployeeRow from "../components/EmployeeRow";

class List extends Component {
    state = {
        lastname: "",
        firstname: "",
        location: "",
        age: "",
        email: ""
    };

    componentDidMount() {
        this.retrieveEmployees();
    }

    retrieveEmployees = () => {
        API.getEmployee()
            .then(res =>
                this.setState({
                    lastname: res.name.last, 
                    firstname: res.name.first,
                    location: res.location,
                    age: res.dob.age,
                    email: res.email,
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <HeadingRow />
                <EmployeeRow lastname={this.state.lastname}/>
            </div>
        );
    };
}

export default List;