import React from 'react'

export default function CategContainer({categName}) {
    let id = "Id" + categName;
    return(
        <div className="container">
            <input className="check" type="checkbox" id={id}/>
            <label for={id}>{categName}</label>
        </div>
    )
}