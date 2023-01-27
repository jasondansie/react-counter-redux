import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  '../components/features/counter/MySlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})