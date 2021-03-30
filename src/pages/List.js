import React, { Component } from "react";
import API from "../utils/API";
import HeadingRow from "../components/HeadingRow";
import EmployeeRow from "../components/EmployeeRow";

class List extends Component {
    state = {
        people: []
    };

    componentDidMount() {
        this.retrieveEmployees();
    }

    retrieveEmployees = () => {
        API.getEmployee()
            .then(res =>
                this.setState({
                    people: res.data.results
                })
            )
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <HeadingRow />
                {this.state.people.map((person) => {
                    return (
                        <EmployeeRow  lastname={person.name.last} firstname={person.name.first} city={person.location.city} state={person.location.state} age={person.dob.age} email={person.email} />
                    )
                })}
            </div>
        );
    };
}

export default List;