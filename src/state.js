let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Привет, как ты?', likeCount: 5 },
                { id: 2, message: 'Это мой первый пост.', likeCount: 23 }
            ],
            newPostText: "samyrai"
        },
        dialogPage: {
            dialogData: [
                { id: 1, name: 'Маша' },
                { id: 2, name: 'Паша' },
                { id: 3, name: 'Саша' },
                { id: 4, name: 'Таша' },
                { id: 5, name: 'Гаша' },
            ],
            messageData: [
                { id: 1, message: 'Привет' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Hi' },
                { id: 4, message: 'Ky' },
                { id: 5, message: 'By' },
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSbscriber() {
        console.log('State changed');
    },
    
    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSbscriber(this._state)
        }else if (action.type === 'APDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSbscriber(this._state)
        }
    },
    subscribe (observer) {
        this._callSbscriber = observer;
    }
}

window.store = store;

export default store;