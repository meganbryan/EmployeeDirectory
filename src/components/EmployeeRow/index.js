import React from "react";

function EmployeeRow({ lastname, firstname, location, age, email }) {
    return (
        <div className="row mx-3 text-center">
            <div className="col border p-2">
                {lastname}
            </div>
            <div className="col border p-2">
                {firstname}
            </div>
            <div className="col border p-2">
                {location}
            </div>
            <div className="col border p-2">
                {age}
            </div>
            <div className="col border p-2">
                {email}
            </div>
        </div>
    )
}

export default EmployeeRow;