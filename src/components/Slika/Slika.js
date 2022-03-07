import React from 'react'

function Slika({src}) {
    return (
        <div>
            <img src={`images/${src}`} alt="Slika" width="50px" height="50px"></img>
        </div>
    )
}

export default Slika
