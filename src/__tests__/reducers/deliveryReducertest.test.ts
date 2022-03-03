import React from 'react' 
import { FETCH_DELIVERIES,SET_LOADING,SET_ERROR,DeliveryListData} from "../../store/delivery/types";
import deliveryReducer from "../../store/delivery/reducer";
 
const initialState = {
    data:  null,
    loading: false,
    error: ''
  };
  describe('deliveryReducer test', () => {
    it('returns the initial state', () => {
        expect(deliveryReducer(undefined, {})).toEqual(initialState);
      });
    
    it('handles   loading ', () => {
        expect(deliveryReducer(initialState, { type: SET_LOADING })).toEqual({
          ...initialState,
          loading: true,
        });
      });
    
    it('handles error  ', () => {
        expect(deliveryReducer(initialState, { type: SET_ERROR,payload:"" })).toEqual({
          ...initialState,
          loading: false,
        });
      });
    
    it('handles delivery fetch loading ', () => {
        expect(deliveryReducer(initialState, { type: FETCH_DELIVERIES, payload:null,  })).toEqual({
          ...initialState,
          loading: false,
        });
      });
  });