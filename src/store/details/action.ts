import { ThunkAction } from 'redux-thunk';
import DeliveryDataService from "../../services/delivery.service";
import { RootState } from '../';
import { GET_DELIVERY_DETAILS,DeliveryDetailsAction, UpdateDeliveryData, SET_LOADING, SET_ERROR } from './types'

 

export const getDeliveryDetails = (id:string): ThunkAction<void, RootState, null, DeliveryDetailsAction> => {
    return async dispatch => {
        try {
            DeliveryDataService.getDeliveryListDetails(id)
            .then((response: any) => {
                dispatch({
                    type: GET_DELIVERY_DETAILS,
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

export const UpdateDeliveryDetails = (data: UpdateDeliveryData, id: any): ThunkAction<void, RootState, null, DeliveryDetailsAction> => {
    return async dispatch => {
        try {
            DeliveryDataService.updateDeliveryDetailsStatus(data,id)
            .then((response: any) => {
                dispatch({
                    type: GET_DELIVERY_DETAILS,
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

export const setLoading = (): DeliveryDetailsAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): DeliveryDetailsAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}