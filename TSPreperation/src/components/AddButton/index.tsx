import { customHeaders, errorHandling, getAllData, patchToDo, postToDo, putToDo } from "../../services/fetch"
import { AddButtonTypes } from "../../types/types";
import Button from '@mui/material/Button'

const AddButton = ({ title, completed, type, children }: AddButtonTypes) => {


    const values = {title, completed}
    function handleAdd() {
        switch (type) {
            
            case "put":
                putToDo(values)
                break;
            case "patch": 
                patchToDo(values)
                break;
            case "all":
                getAllData()
                break;
            case "custom":
                customHeaders(values)
                break;
            case "handling":
                errorHandling()
                break;
            default: 
                postToDo(values)

        }


    }
    return (

        <Button variant="contained" onClick={handleAdd} sx={{margin: "3px"}}>{children}</Button>
    )
}

export default AddButton