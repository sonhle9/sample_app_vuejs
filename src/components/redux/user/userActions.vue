<!--
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'
import API from '../../shared/api';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
      new API().getHttpClient().get('/sessions', { withCredentials: true }
      ).then(response => {
        dispatch(fetchUsersSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
-->
