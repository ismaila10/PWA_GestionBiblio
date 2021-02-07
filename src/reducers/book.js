import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../actions/book'

const initialState = {
  list: [{id: '1A', name: 'Une vie de boy', author: 'Ferdinand Oyono', statut:'Disponible'},
    {id: '1AB', name: 'Une si longue lettre', author: 'Mariama Ba', statut:'Disponible'},
    {id: '1AC', name: 'Les fables', author: 'Jean De La Fontaine', statut:'Disponible'},
    {id: '1AD', name: 'Vol de nuit', author: 'Antoine De Saint Exupery', statut:'Disponible'},
    {id: '1AE', name: 'Les fables', author: 'Jean De La Fontaine', statut:'Disponible'},
    {id: '1AF', name: 'Les Contemplations', author: 'Victor Hugo', statut:'Disponible'}          
  ]
}

const deleteBook = (payload, list) => {
  const newList = list.filter(listElement => listElement.id !== payload)
  return newList
}

const editBook = (payload, list) => {
  const indexOfEdit = list.map(listItem => listItem.id).indexOf(payload.id)
  list.splice(indexOfEdit, 1, payload)
  return list
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_BOOK:
      return {
        ...state,
        list: deleteBook(action.payload, state.list)
      }
    case EDIT_BOOK:
      return {
        ...state,
        list: editBook(action.payload, state.list)
      }
    default:
      return state
  }
}
