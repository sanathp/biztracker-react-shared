import * as types from '../constants/actionTypes';

const initialState = {
  isPending: true,
  isError: false,
  data: []
};

export default function properties(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case types.GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        isPending: false,
        isError: false,
        data: payload,
      };
    case types.GET_PROPERTIES_PENDING:
      return {
        ...state,
        isPending: true,
        isError: false,
        data: []
      };
    case types.GET_PROPERTIES_ERROR:
      return {
        ...state,
        isPending: false,
        isError: true,
        error: error
      };
    case types.SET_PROPERTIES:
      let data = action.data;
      return {
        ...state,
        isPending: false,
        isError: false,
        data: data,
      };
    case types.ADD_PROPERTY:
        let addProperty = [action.data];
      return {
          ...state,
          data: [...addProperty, ...state.data],
        };
    case types.UPDATE_PROPERTY:
      //update property
      let newProperties = state.data.map((property, index) => {
        if (property.propertyId === action.propertyId) {
          return action.data;
        }
        return property;
      });
      return {
        ...state,
        data: newProperties,
      };
    default:
      return state;
  }
}