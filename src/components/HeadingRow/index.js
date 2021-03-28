import React from "react";

function HeadingRow() {
    return (
        <div className="row mx-2 mt-2 px-2 pt-2 text-center">
            <div className="col border p-2">
                <strong>Name:</strong>
            </div>
            <div className="col border p-2">
                <strong>Location:</strong>
            </div>
            <div className="col border p-2">
                <strong>Age:</strong>
            </div>
            <div className="col border p-2">
                <strong>Email:</strong>
            </div>
            <div className="col border p-2">
                <strong>Title:</strong>
            </div>
        </div>
    )
}

export default HeadingRow;