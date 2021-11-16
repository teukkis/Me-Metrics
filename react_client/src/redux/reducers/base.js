import { states } from 'constants/states'


const initialState = {}

// Keeps track of the log messages
export const baseReducer = (state = initialState, action) => {
  switch(action.type) {
    case states:
    default:
      return state
  }
}

