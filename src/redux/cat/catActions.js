import {FETCH_CATS_REQUEST, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE} from './catTypes'
import axios from 'axios'
export const fetchCatsRequest = () =>{
    return {
        type: FETCH_CATS_REQUEST
    }
}

export const fetchCatsSuccess = (cats) =>{
    return {
        type: FETCH_CATS_SUCCESS,
        payload: cats
    }
}

export const fetchCatsFailure = (error) =>{
    return {
        type: FETCH_CATS_FAILURE,
        payload: error
        
    }
}

export const fetchCats = () => {
    return (dispatch) => {
        dispatch(fetchCatsRequest)
        axios.get('https://api.thecatapi.com/v1/breeds')
            .then(response =>{
                const cats = response.data
                dispatch(fetchCatsSuccess(cats))
            })
            .catch(error =>{
                const errMsg = error.message
                dispatch(fetchCatsFailure(errMsg))
            })
    }
}