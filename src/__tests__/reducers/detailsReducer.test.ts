import React from 'react' 
import { GET_DELIVERY_DETAILS,SET_LOADING,SET_ERROR} from "../../store/details/types";
import deliveryDetailsReducer from "../../store/details/reducer";
 
const initialState = {
    data:  null,
    loading: false,
    error: ''
  };
  describe('deliveryDetailsReducer test', () => {
    it('returns the initial state', () => {
        expect(deliveryDetailsReducer(undefined, {})).toEqual(initialState);
      });
    
    it('handles   loading ', () => {
        expect(deliveryDetailsReducer(initialState, { type: SET_LOADING })).toEqual({
          ...initialState,
          loading: true,
        });
      });
    
    it('handles error  ', () => {
        expect(deliveryDetailsReducer(initialState, { type: SET_ERROR,payload:"" })).toEqual({
          ...initialState,
          loading: false,
        });
      });
    
    it('handles delivery fetch loading ', () => {
        expect(deliveryDetailsReducer(initialState, { type: GET_DELIVERY_DETAILS, payload:null,  })).toEqual({
          ...initialState,
          loading: false,
        });
      });
  });