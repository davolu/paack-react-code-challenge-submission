import { ThunkAction } from 'redux-thunk';
import DeliveryDataService from "../../services/delivery.service";
import { RootState } from '../';
import { FETCH_DELIVERIES,DelieveryAction,  SET_LOADING, SET_ERROR } from './types'

export const getDeliveryList = (): ThunkAction<void, RootState, null, DelieveryAction> => {
    return async dispatch => {
        try {
            DeliveryDataService.getListDelivery()
            .then((response: any) => {
                dispatch({
                    type: FETCH_DELIVERIES,
                    payload: response.data
                });
            })
            .catch((e: Error) => {
                dispatch({
                    type: SET_ERROR,
                    payload: e.message
                })
            });
            
        } catch(err) {
            dispatch({
                type: SET_ERROR,
                payload: ''
            })
        }
    }
}

export const setLoading = (): DelieveryAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): DelieveryAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}