export const required = value => {
    if (value) return undefined

    return "Ошибка: пустое поле"
}



export const maxLengthCreator = (value) => (value1) => {
    if (value1 && value1.length > value) return `макс длина ${value} символов`

    return undefined
}