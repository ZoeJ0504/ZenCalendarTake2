import React, { useEffect, useState } from "react"
import Todolist from "../components/Todolist"
import Todoform from "../components/Todoform"
import styled from '@emotion/styled'

function ToDoPage({ taskList, handleSubmit, HandleClickFive }) {


    return (
        <ToDoDiv>
            <Todolist taskList={taskList} />
            <Todoform handleSubmit={handleSubmit} HandleClickFive={HandleClickFive} />
        </ToDoDiv >
    )
}

const ToDoDiv = styled.div`
background-color: #6E6A6F;
display: flex;
justify-content: space-evenly;
padding-bottom: 500px;
padding-top: 100px;
`
export default ToDoPage