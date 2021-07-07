import {FETCH_CATS_REQUEST, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE} from './catTypes'
const initialState = {
    loading: false,
    cats: [],
    error: ''
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case FETCH_CATS_REQUEST: 
            return{
                ...state,
                loading: true
            }
        case FETCH_CATS_SUCCESS: 
            return{
                loading: false,
                cats: action.payload,
                error: ''
            }
        case FETCH_CATS_FAILURE: 
            return{
                loading: false,
                cats: [],
                error: action.payload
            }
        default: return state
    }
}
export default reducer
