import {rerenderEntireTree} from './render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привет, как ты?', likeCount: 5 },
            { id: 2, message: 'Это мой первый пост.', likeCount: 23 }
        ],
        newPostText: ""
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
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let updatePostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)

}

export default state;