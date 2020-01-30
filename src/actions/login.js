import * as types from './action-types'
import { getData } from '../apis'

export const addRequest = (text) => {
    return {
        type: types.ADD_REQUEST,
        text: text
    }
}


export const createRequest = (req) => async dispatch => {
    const data = await getData(req)

    return {
        type: types.LOGIN_REQUEST,
        payload: { 
            data
        }
    }
}

export const updateRequest = (req) => {
    return async function(dispatch, getState){
        console.log(getState);
        return {
            type: types.LOGIN_REQUEST,
            payload: { 
                req
            }
        }
    }
}


//Memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const data = await fetch(id);

//     dispatch({ type: 'GET_DATA', payload: data})
// })

export const fetchPostsAndUsers = (id) => async ( dispatch, getState ) => {
    await dispatch(fetchPosts());
    const posts = getState().posts;
    
}

export const fetchUser = id => async dispatch => {
    const response = await fetch(id);

    dispatch({ type: 'GET_USER', payload: response.data})
}

export const fetchPosts = postId => async dispatch => {
    const response = await fetch(postId);

    dispatch({ type: 'GET_POST', payload: response.data})
}

export const removePosts = id => async dispatch => {

    dispatch({ type: 'REMOVE_POST', payload: id })
}


export const fetchExchangeBegin = () => ({
    type: types.GET_EXCHANGE_BEGIN
  });
  
  export const fetchExchangeSuccess = data => ({
    type: types.GET_EXCHANGE,
    payload: { data }
  });
  
  export const fetchExchangeError = error => ({
    type: types.GET_EXCHANGE_FAILURE,
    payload: { error }
  });
  