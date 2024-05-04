const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 12 },
    { id: 2, message: "It is my first post", likesCount: 11 }
  ],
  NewPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        NewPostText: '',
        posts: [...state.posts, {id: 5, message: state.NewPostText, likesCount: 0}]
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        NewPostText: action.newText
      }
    default:
      return state
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
