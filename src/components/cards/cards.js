import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme }  from "react-loading-skeleton";
import "./cards.css"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const Cards = ({movie}) => {

    const [ isLoading, setIsLoading] = useState(true)
    const favouriteMovies = useSelector(state => state.favouriteMovies)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },1500)
    },[movie.poster_path])

    return <>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color="#fff" highlightColor="#afacac">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/AllMovies/movie/${movie.id}`} style={{textDecoration: "none", color: "white"}}><div className="cards">
                {
                    favouriteMovies.map(favMovie => {
                        if(favMovie.id === movie.id){
                            return<span class="favourite__indicator"><i className="newTab favouriteOne fas fa-heart" /></span>
                        }
                    })
                }  
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />     
                <div className="cards__overlay">
                    <div class="card__title">{movie ? movie.original_title : ""}</div>
                    <div class="card__runtime">{movie ? movie.release_date : ""}<span className="card__rating">{movie ? movie.vote_average : ""} <i class="fas fa-star" />{"  "}</span></div>
                    <div class="card__description">{movie ? movie.overview.slice(0,118) + "...": ""}</div>
                </div >
            </div></Link>
        }
    </>
};

export default Cards;