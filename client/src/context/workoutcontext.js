import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return { 
        notes: action.payload 
      }
    case 'CREATE_NOTE':
      return { 
        notes: [action.payload, ...state.notes] 
      }
    case 'DELETE_NOTES':
      return { 
        notes: state.notes.filter((note) => note._id !== action.payload._id)
      }     
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    notes: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}