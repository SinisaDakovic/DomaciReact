import React from 'react'
import Slika from '../Slika/Slika'
import "../Film/film.css"

function Film(props) {
    return (
        <div className="film">
            <h3>{props.movieName}</h3>
            <h3>{props.year}</h3>
            <h3>{props.genre}</h3>
            <h3>{props.director}</h3>
            <h3>{props.actors}</h3>
            <Slika src={`${props.image}`}/>
        </div>
    )
}

export default Film
