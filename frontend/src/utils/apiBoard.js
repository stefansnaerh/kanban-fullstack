


const url='http://localhost:5001/api/boards'


const apiBoard = {

    get : (path) => {
        return fetch(`${url}${path}`, {
            method: 'GET',
            headers: {},
        }).then(async (res) => ({ data: await res.json(), status: res.status}))
    },

    post: (path, body) => {
        fetch(`${url}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': "applicsation/json",
            },
            body: body ? JSON.stringify(body) : '',
        }).then(async (res) => {
            return {
                data: await res.json(),
                status: res.status,
            }
        })
    }
}



export default apiBoard