import { patchToDo, postToDo, putToDo } from "../../services/fetch"
import { AddButtonTypes } from "../../types/types";
import Button from '@mui/material/Button'

const AddButton = ({ title, completed, type, children }: AddButtonTypes) => {


    function handleAdd() {


        switch (type) {
            
            case "put":
                putToDo({ title, completed })
                break;
            case "patch": 
                patchToDo({title, completed})
                break;
            default: 
                postToDo({ title, completed })

        }


    }
    return (

        <Button variant="contained" onClick={handleAdd} sx={{margin: "3px"}}>{children}</Button>
    )
}

export default AddButton