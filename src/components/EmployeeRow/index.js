import React from "react";

function EmployeeRow({ name, location, age, email, title }) {
    return (
        <div className="row mx-3 text-center">
            <div className="col border p-2">
                {name}
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