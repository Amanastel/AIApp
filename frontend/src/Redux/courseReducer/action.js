import { COURSE_FAIL, COURSE_SUCCESS } from "./actionTypes";

export const CourseSelection = (selectedCourse) => (dispatch) => {

    return axios
      .post(``, selectedCourse)
      .then((res) => {
        console.log("Selected Course Track", res);
        dispatch({ type: COURSE_SUCCESS, payload: res.data });
        
      })
      .catch(() => {
        dispatch({ type: COURSE_FAIL });
      });
  };