import { ADD_USER } from '../actions/user'

const initialState = {
  list: [{id: '1A', name: 'Ismaila', role: 'Administrateur'},
    {id: '1AB', name: 'Autres', role: 'Invite'}         
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}