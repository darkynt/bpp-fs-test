import fetchCourses from '../actions/fetch-courses'

const defaultState = {
  courses: [],
  pending: true,
  error: null,
}

const courseReducer = (state = defaultState, {type, payload, ...action}) => {
  switch(type) {
    case fetchCourses.type: {
      return {
        ...state,
        pending: true,
      }
    }

    case fetchCourses.successType: {
      return {
        ...state,
        courses: payload,
        pending: false,
      }
    }

    case fetchCourses.failureType: {
      return {
        ...state,
        courses: payload,
        pending: false,
      }
    }

    default: 
      return state
  }
}

export default courseReducer
