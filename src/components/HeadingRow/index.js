import React from "react";

function HeadingRow() {
    return (
        <div className="row mx-2 mt-2 px-2 pt-2 text-center">
            <div className="col-2 border p-2 bg-dark text-white">
                <strong>Last Name:</strong>
            </div>
            <div className="col-2 border p-2 bg-dark text-white">
                <strong>First Name:</strong>
            </div>
            <div className="col-2 border p-2 bg-dark text-white">
                <strong>Location:</strong>
            </div>
            <div className="col-2 border p-2 bg-dark text-white">
                <strong>State:</strong>
            </div>
            <div className="col-4 border p-2 bg-dark text-white">
                <strong>Email:</strong>
            </div>
        </div>
    )
}

export default HeadingRow;