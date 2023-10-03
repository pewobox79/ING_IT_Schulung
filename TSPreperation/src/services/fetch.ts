import axios from "axios"
import { AddButtonTypes } from "../types/types"

const URL = 'https://jsonplaceholder.typicode.com/toDos'
export const getToDos =async ()=>{

    const response = await axios.get(URL,{params: {_limit: 5}})

    return response.data


}

export const postToDo =({title, completed}:AddButtonTypes)=>{

    axios.post(URL, {title: title, completed: completed})
    .then(res => console.log(res.data))
}


export const putToDo=({title, completed}: AddButtonTypes)=>{

    axios.put(`${URL}/1`, {title, completed})
    .then(res => console.log(res.data))
}


export const patchToDo = ({title, completed}:AddButtonTypes) => {

    axios.patch(`${URL}/1`, { title: title, completed: completed })
        .then(res => console.log(res.data))
}