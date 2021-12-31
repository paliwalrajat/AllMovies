const initialState = {
    favouriteMovies: [],
    popularMovies: [],
    currentMovieDetail: {}
}

const reducer =  (state=initialState, action) => {
    switch(action.type){
        case "SET_FAVOURITE_ASYNC":
            return {
                ...state,
                favouriteMovies: [ ...state.favouriteMovies, action.payload.payload ]
            }
        case "REMOVE_FAVOURITE_ASYNC":
            return {
                ...state,
                favouriteMovies: state.favouriteMovies.filter(movie => movie.id != action.payload.payload.id)
            }
        case "GET_POPULAR_MOVIES_ASYNC":
            return {
                ...state,
                popularMovies: [...action.payload]
            }
        case "SET_CURRENT_MOVIE_DETAIL_ASYNC":
            return {
                ...state,
                currentMovieDetail: { ...action.payload }
            }
        default:
            return state
    }
}

export default reducer