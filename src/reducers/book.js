import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../actions/book'

const initialState = {
  list: [{id: 'DDD', name: 'ismaila', author: 'diallo', statut:'ahhd'}]
}

const deleteBook = (payload, list) => {
  const newList = list.filter(listElement => listElement.id != payload)
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
