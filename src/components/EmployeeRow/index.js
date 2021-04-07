import React from "react";

function EmployeeRow({ lastname, firstname, city, state, email }) {
    return (
        <div className="row mx-3 text-center">
            <div className="col-2 border p-2">
                {lastname}
            </div>
            <div className="col-2 border p-2">
                {firstname}
            </div>
            <div className="col-2 border p-2">
                {city}
            </div>
            <div className="col-2 border p-2">
                {state}
            </div>
            <div className="col-4 border p-2">
                {email}
            </div>
        </div>
    )
}

export default EmployeeRow;