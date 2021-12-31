import React, { useEffect } from 'react'
import "./movieListPage.css"
import Card from "../../components/cards/cards"
import { useDispatch, useSelector } from "react-redux"
import { getPopularMovies } from "../../redux/action"

const AllMovies = () => {

    const dispatch = useDispatch()
    const popularMovies = useSelector(state => state.popularMovies)

    useEffect(() => {
        dispatch(getPopularMovies())
    },[])
    

    return (
        <div className="movie_group">
            <div className="movies_card">
                {
                    popularMovies.map(movie => <Card movie={movie} />)
                }
            </div>
        </div>
    );
};

export default AllMovies;