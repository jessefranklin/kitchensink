
export const getData = (id) => {
    return fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
    })
    .then(r => r.json())
    .then(
        user => {
            window.localStorage.setItem('token', user.token)
            return user;
        },
        error => {
            new Error('')
        },
    )
}