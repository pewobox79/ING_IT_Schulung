import axios from "axios"
import { AddButtonTypes } from "../types/types"

//Axios Globals
axios.defaults.headers.common["X-Auth-Token"] = 'someTokeninDefault'


const URL = 'https://jsonplaceholder.typicode.com/toDos'
export const getToDos = async () => {

    const response = await axios.get(URL, { params: { _limit: 5 } })

    return response.data


}

export const postToDo = ({ title, completed }: AddButtonTypes) => {

    axios.post(URL, { title: title, completed: completed })
        .then(res => console.log(res.data))
}


export const putToDo = ({ title, completed }: AddButtonTypes) => {

    axios.put(`${URL}/1`, { title, completed })
        .then(res => console.log(res.data))
}


export const patchToDo = ({ title, completed }: AddButtonTypes) => {

    axios.patch(`${URL}/1`, { title: title, completed: completed })
        .then(res => console.log(res.data))
}


export const getAllData = () => {

    axios.all([
        axios.get(URL),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ]
    )
        .then(axios.spread((todos, posts) => {
            console.log("spread", todos, posts)

        }))
        .catch(err => console.error(err))
}

export const customHeaders = ({ title, completed }: AddButtonTypes) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    }
    axios.post(URL, { title: title, completed: completed }, config)
        .then(res => console.log(res.data))

}


export const errorHandling = () => {
    axios.get('https://jsonplaceholder.typicode.com/toDos').then(res => console.log("error function response", res))
        .catch((err) => { 
            console.log("err", err)
            if (err.response) {
                //Server responded with a status other than 200
                console.log(err)

                if (err.response.status !== 404) {
                    alert("Error: Page not Found")
                }
            }
        })
}


//intercepting Requests & Responses

axios.interceptors.request.use((config) => {

    console.log(`${config.method?.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}! the headers info: ${config.headers} `)
})