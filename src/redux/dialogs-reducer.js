const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

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
  ],
  messageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageText: '',
        messages: [...state.messages, {id: 4, message: state.messageText}]
      }
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        messageText: action.textMessage
      }
    default:
      return state
  }
};

export const addMesageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (textMessage) =>
    ({type: UPDATE_MESSAGE_TEXT, textMessage: textMessage})

    
export default dialogsReducer;
