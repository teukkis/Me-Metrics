import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { states } from 'constants/states'

// Import reducers


// Form an object of reducers
const appReducer = combineReducers({

})

// Rootreducer is for clearing the store after logout
const rootReducer = (state, action) => {
  if (action.type === states.CLEAR) {
    state = undefined
  }
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
