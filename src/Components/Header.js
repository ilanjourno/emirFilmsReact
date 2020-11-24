import React from 'react'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

import { useSelector } from 'react-redux'

export default function Header() {

    let { movies } = useSelector((redux) => {
        return redux.global
    })

    return (

        <ul>
            <li> <Link to="/"> Accueil </Link> </li>  
            <li> <Link to="/movies"> Movies ({movies.length}) </Link></li>  
            <li> <Link to="/add-movies"> Add Movies </Link></li>  
        </ul>

    )

}