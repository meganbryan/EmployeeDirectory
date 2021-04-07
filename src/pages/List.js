import React, { Component } from "react";
import API from "../utils/API";
import HeadingRow from "../components/HeadingRow";
import EmployeeRow from "../components/EmployeeRow";

class List extends Component {
    state = {
        people: [],
        filteredPeople: [],
        textInput: ""
    };

    handleInputChange = (event) => {
        this.setState({
            textInput: event.target.value
        })
    }

    componentDidMount = () => {
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

    sortByLast = () => {
        return this.state.people.sort(function (a, b) {
            if (a.name.last < b.name.last) {
                return -1;
            }
            else {
                return 1;
            }
        })
    }

    filterEmployees = () => {
        this.setState({
            filteredPeople: this.state.people.filter(person => person.location.state.includes(this.state.textInput))
        });
    };

    render = () => {
        return (
            <div>
                <input value={this.state.textInput} type="text" placeholder="Search states" onChange={this.handleInputChange}></input>
                <HeadingRow />
                {this.state.people.map((person) => {
                    return (
                        <EmployeeRow  lastname={person.name.last} firstname={person.name.first} city={person.location.city} state={person.location.state} age={person.dob.age} email={person.email} />
                    )
                })}
            </div>
        );
    };
};

export default List;