import React from 'react'
import '../Lista/lista.css'

function Lista({children}) {
    return (
        <div className="list">
            {children}
        </div>
    )
}

export default Lista
