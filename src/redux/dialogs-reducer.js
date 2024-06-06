const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ],
  messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I am fine, thanks!" }
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: action.NewMessage}]
      }
    default:
      return state
  }
};

export const addMesageActionCreator = (NewMessage) => ({ type: ADD_MESSAGE, NewMessage })

    
export default dialogsReducer;
