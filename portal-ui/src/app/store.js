import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMw from 'redux-saga'

import courseReducer from "./reducers/course-reducer"
import { watchLoadCourses } from './sagas/load-courses'
const sagaMw = createSagaMw()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  courseReducer,
  composeEnhancers(applyMiddleware(sagaMw))
)

sagaMw.run(watchLoadCourses)

export default store