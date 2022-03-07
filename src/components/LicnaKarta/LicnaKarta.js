import React from 'react'
import Slika from '../Slika/Slika'
import "../LicnaKarta/licnaKarta.css"

function LicnaKarta(props) {
    return (
        <div className="licnaKarta">
            <h3>{props.fullName}</h3>
            <h3>{props.birthDate}</h3>
            <h3>{props.town}</h3>
            <Slika src={`${props.image}`}/>
        </div>
    )
}

export default LicnaKarta
