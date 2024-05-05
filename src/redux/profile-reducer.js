const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 12 },
    { id: 2, message: "It is my first post", likesCount: 11 }
  ],
  NewPostText: '',
  profile: null
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
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
