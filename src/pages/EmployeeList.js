import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import HeadingRow from "../components/HeadingRow";
import EmployeeRow from "../components/EmployeeRow";

export default function ListTwo() {
    const [employeeState, setEmployeeState] = useState([])

    const [filteredEmployeeState, setFilteredEmployeeState] = useState([])

    const [textState, setTextState] = useState("")

    useEffect (() => {
        retrieveEmployees();
    }, []);

    useEffect (() => {
        filterEmployees();
    }, [textState]);

    const handleInputChange = (event) => {
            setTextState(event.target.value);
    }

    const retrieveEmployees = () => {
        API.getEmployee()
            .then(res => {
                setEmployeeState(res.data.results);
                setFilteredEmployeeState(res.data.results);
            })
            .catch(err => console.log(err));
    };

    const filterEmployees = () => {
        const filteredArray = employeeState.filter(person => person.location.state.toLowerCase().includes(textState.toLowerCase()));
        setFilteredEmployeeState (filteredArray);
    }

    const sortByLast = () => {
        const sortedEmployees = filteredEmployeeState.sort(function (a, b) {
            if (a.name.last < b.name.last) {
                return -1;
            }
            else {
                return 1;
            }
        })
        setFilteredEmployeeState(sortedEmployees)
    }
    
    return (
        <div>
            <input className= "m-2 ml-5 text-center" value={textState} type="text" placeholder="Search states" onChange={handleInputChange}></input>
            <button className= "m-2 text-center btn-secondary" onClick={sortByLast}>Sort by last name</button>
            <HeadingRow />
            {filteredEmployeeState.map((person) => {
                return (
                    <EmployeeRow  lastname={person.name.last} firstname={person.name.first} city={person.location.city} state={person.location.state} age={person.dob.age} email={person.email} />
                )
            })}
        </div>
    )
};
