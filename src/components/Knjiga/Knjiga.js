import React from 'react'
import Slika from '../Slika/Slika'
import '../Knjiga/knjiga.css'

function Knjiga(props) {
    return (
        <div className="knjiga">
            <h3>{props.name}</h3>
            <h3>{props.year}</h3>
            <h3>{props.author}</h3>
            <Slika src={`${props.image}`}/>
            <h3>{props.quote}</h3>
        </div>
    )
}

export default Knjiga
