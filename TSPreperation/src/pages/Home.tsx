import { useEffect, useState } from "react"
import BasicPageLayout from "../layouts/BasicPageLayout"
import { getToDos } from "../services/fetch"
import AddButton from "../components/AddButton";
const Home = () => {

    const [data, setData] = useState([]);

    async function requestData() {
        const response = await getToDos()
        setData(response)
    }
    useEffect(() => {
        requestData()


    }, [])



    const ToDoList = data.map((item: { title: string, id: string, completed: boolean }) => {
        return <div key={item.id}><h4 style={{ textDecoration: item.completed ? "line-through" : "" }}>{item.title}</h4></div>
    })

    return (    
        <BasicPageLayout>

            <h1>My To Dos</h1>
            {ToDoList}
            <AddButton title="add post" completed={false}> Add new Todo</AddButton>
            

            <AddButton title="put the post" completed={true} type="put"> put todo</AddButton>

            <AddButton title="patch the post" completed={true} type="patch"> patch to do</AddButton>

        <AddButton  type="all">Get All Data</AddButton>

        <AddButton type="custom" title="custom title" completed={false}>Custom Headers</AddButton>
        <AddButton type="handling">Error Handling</AddButton>
        </BasicPageLayout>
    )
}


export default Home