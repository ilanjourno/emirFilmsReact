import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
export default function ScreenMovies() {

    let dispatch = useDispatch();

    let {movies} = useSelector((redux) => {
        return redux.global;
    })

    return (
        <div>
            {
                movies.map((movie, index) => {
                    return (
                        <p>
                            {movie.title}
                            <Button onClick={() => dispatch({type: "DELETE_MOVIE", index: index})} variant="primary">{index}Supprimer</Button>
                        </p>
                    )
                })
            }
        </div>
    )
}