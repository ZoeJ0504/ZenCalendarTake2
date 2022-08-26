import React, { useState } from "react"
import styled from 'styled-components'

function Task({ task, category, id }) {
    const [completed, setCompleted] = useState(true)

    function handleClick() {
        setCompleted(!completed)
        const TaskObj = {
            completed: completed,
            task: task,
            category: category
        }
        fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(TaskObj)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    console.log(completed)
    return (
        <tr>
            <td>
                <Checkbox onClick={handleClick} type="checkbox"></Checkbox>
            </td>
            <td>{task}</td>
            <td>{category}</td>
        </tr>
    )
}
const Checkbox = styled.input`
width: 15px;
height: 15px;
`
export default Task;