import { takeEvery, put } from 'redux-saga/effects'
import fetchCourses from '../actions/fetch-courses'

export function* loadCourses() {
  console.log('Running')
  try {
    const result = yield fetch('/courses')
      .then(res => {
        if (!res.ok) throw new Error('Could not retrieve result')
        return res.json()
      })
    yield put(fetchCourses.successActionCreator(result))
  } catch(err) {
    yield put(fetchCourses.failureActionCreator(err))
  }
}

export function* watchLoadCourses() {
  yield* loadCourses() // Run once at app init
  yield takeEvery(fetchCourses.type, loadCourses)
}
