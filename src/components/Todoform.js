import React, { useState } from "react"
import styled from 'styled-components'

function Todoform({ handleSubmit }) {
    const [newTask, setNewTask] = useState({
        completed: false,
        task: "",
        category: ""
    })

    function handleChange({ target }) {
        setNewTask({ ...newTask, [target.name]: target.value })
    }

    function handleHandlerSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:4000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        handleSubmit(newTask)
    }

    return (
        <div>
            <form onSubmit={handleHandlerSubmit}>
                <input onChange={handleChange} type="text" name="task" placeholder="Task"></input>
                <input onChange={handleChange} type="text" name="category" placeholder="Category"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Todoform