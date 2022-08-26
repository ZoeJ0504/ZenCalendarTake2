import React, { useState } from "react"
import styled from 'styled-components'


function Todoform({ handleSubmit, HandleClickFive }) {
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
        event.target.reset()
    }

    return (
        <FormDiv>
            <TitleP onClick={HandleClickFive}>Got Something More To-do?</TitleP>
            <form onSubmit={handleHandlerSubmit}>
                <p><TaskInput onChange={handleChange} type="text" name="task" placeholder="Task"></TaskInput></p>
                <p><TaskInput onChange={handleChange} type="text" name="category" placeholder="Category"></TaskInput></p>
                <SubmitButton type="submit">Don't Push This</SubmitButton>
            </form>
            <p>As long as it's not on the list it can be forgotten</p>
        </FormDiv>
    )
}

const FormDiv = styled.div`
background-color: darkgray;
padding: 20px;
background-size: 100%
`

const TaskInput = styled.input`
width: 70%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
`
const TitleP = styled.p`
font-size: 30px;
`

const SubmitButton = styled.button`
border-radius: 12px;
background-color: black;
color: white;
width: 150px;
height: 50px;
`
export default Todoform