import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'

const bigReducer = combineReducers({
  favourite: mainReducer,
  job: jobReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
