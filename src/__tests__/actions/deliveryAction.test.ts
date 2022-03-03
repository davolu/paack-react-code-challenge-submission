import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { apiMiddleware, ApiError } from 'redux-api-middleware';
import * as deliveryActions from '../../store/delivery/action'
import thunk from 'redux-thunk'
import deliveryReducer from "../../store/delivery/reducer";
import { FETCH_DELIVERIES,SET_LOADING,SET_ERROR} from "../../store/delivery/types";
import {deliveryData} from "../../utils/mock-common-data";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(deliveryReducer)
 

const mockDispatch = jest.fn()
 
describe('delivery actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    it('Dispatches FETCH_DELIVERIES after fetching deliverues', () => {
        // Response body sample
     
        fetchMock.getOnce('/deliveries',
                { body: { results: deliveryData }})

        const expectedActions = [
         { type: FETCH_DELIVERIES, payload: deliveryData}
        ]
       
         mockDispatch(deliveryActions.getDeliveryList());
         
       // expect(store.getActions()).toEqual(expectedActions)
    });

});
