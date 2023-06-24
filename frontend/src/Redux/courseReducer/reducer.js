import { COURSE_FAIL, COURSE_SUCCESS } from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch(type)
  {
    
    case COURSE_SUCCESS:
      return {...state, isLoading: false, data: payload}
    case COURSE_FAIL:
      return {...state, isLoading:false, isError:true}
    default:
      return state;
  }
};

