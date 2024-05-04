import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi! How are you?", likesCount: 12 },
                { id: 2, message: "It is my first post", likesCount: 11 }
            ],
            NewPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return store._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    
        this._callSubscriber(this._state)
    }
}



export default store