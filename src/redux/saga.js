import { takeLatest, put, all } from "redux-saga/effects"



// SET FAVOURITE
function* setFavouriteAsync(payload) {
    yield put({ type: "SET_FAVOURITE_ASYNC", payload: payload})
}
function* watchSetFavouriteMovie() {
    yield takeLatest("SET_FAVOURITE", setFavouriteAsync)
}

// REMOVE FAVOURITE
function* removeFavouriteAsync(payload) {
    yield put({ type: "REMOVE_FAVOURITE_ASYNC", payload: payload})
}
function* watchRemoveFavouriteMovie() {
    yield takeLatest("REMOVE_FAVOURITE", removeFavouriteAsync)
}

// SET CURRENT MOVIE DETAIL
function* setCurrentMovieDetailAsync(payload) {
    const json = yield fetch(`https://api.themoviedb.org/3/movie/${payload.payload}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(res => res.json())
    yield put({ type: "SET_CURRENT_MOVIE_DETAIL_ASYNC", payload: json})
}
function* watchSetCurrentMovieDetailAsync() {
    yield takeLatest("SET_CURRENT_MOVIE_DETAIL", setCurrentMovieDetailAsync)
}

// GET POPULAR MOVIES
function* getPopularMoviesAsync() {
    const json = yield fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(res => res.json())
    yield put({ type: "GET_POPULAR_MOVIES_ASYNC", payload: json.results})
}
function* watchGetPopularMovies() {
    yield takeLatest("GET_POPULAR_MOVIES", getPopularMoviesAsync)
}

// FINAL EXPORT ALL
export default function* rootSaga() {
    yield all([
        watchSetFavouriteMovie(), 
        watchRemoveFavouriteMovie(),
        watchGetPopularMovies(), 
        watchSetCurrentMovieDetailAsync()
    ])
}