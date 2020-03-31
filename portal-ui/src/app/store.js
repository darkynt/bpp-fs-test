import { createStore, applyMiddleware } from 'redux'
import createSagaMw from 'redux-saga'

import courseReducer from "./reducers/course-reducer"
import { watchLoadCourses } from './sagas/load-courses'
const sagaMw = createSagaMw()

const store = createStore(
  courseReducer,
  applyMiddleware(sagaMw)
)

sagaMw.run(watchLoadCourses)

export default store