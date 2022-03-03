import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import { apiMiddleware, ApiError } from 'redux-api-middleware';
import * as DetailsActions from '../../store/details/action'
import thunk from 'redux-thunk'
import deliveryDetailsReducer from "../../store/details/reducer";
import { GET_DELIVERY_DETAILS,SET_LOADING,SET_ERROR} from "../../store/details/types";
import {deliveryData} from "../../utils/mock-common-data";

const middlewares = [thunk]
const createStore = configureMockStore(middlewares)
const store = createStore(deliveryDetailsReducer)
 

const mockDispatch = jest.fn()
 
describe('delivery actions', ()   => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    

     it('Dispatches GET_DELIVERY_DETAILS after fetching deliverues', () => {
        const expectedActions = [
         { type: GET_DELIVERY_DETAILS, payload: deliveryData}
        ] 

         mockDispatch(DetailsActions.getDeliveryDetails("5"));
         /*expect(store.getActions()).toContainEqual({
            type: "GET_DELIVERY_DETAILS"
          })
          
          expect(mockDispatch).toHaveBeenCalledWith({
            type: GET_DELIVERY_DETAILS,
            payload: deliveryData
         });  */    
         //TODO:: Add more coverages and complete
    });
});
