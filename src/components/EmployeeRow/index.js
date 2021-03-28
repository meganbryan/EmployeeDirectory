import React from "react";

function EmployeeRow(props) {
    return (
        <div className="row mx-3 text-center">
            <div className="col border p-2">
                {props.name}
            </div>
            <div className="col border p-2">
                {props.location}
            </div>
            <div className="col border p-2">
                {props.age}
            </div>
            <div className="col border p-2">
                {props.email}
            </div>
            <div className="col border p-2">
                {props.title}
            </div>
        </div>
    )
}

export default EmployeeRow;