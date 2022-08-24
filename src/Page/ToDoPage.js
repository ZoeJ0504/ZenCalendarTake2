import React, { useEffect, useState } from "react"
import Todolist from "../components/Todolist"
import Todoform from "../components/Todoform"
import styled from '@emotion/styled'

function ToDoPage() {
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/tasks")
            .then(res => res.json())
            .then(data => setTaskList(data))
    }, [])

    function handleSubmit(newTask) {
        setTaskList([...taskList, newTask])
    }

    return (
        <ToDoDiv>
            <Todolist taskList={taskList} />
            <Todoform handleSubmit={handleSubmit} />
        </ToDoDiv >
    )
}

const ToDoDiv = styled.div`
background-color: #6E6A6F;
`
export default ToDoPage