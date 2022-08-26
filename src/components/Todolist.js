import React from "react"
import styled from 'styled-components'
import Rocks from '../images/rocks4.jpeg'
import Task from "./Task"

function Todolist({ taskList }) {

    // const DeletedTask = taskList.filter(task => task.completed === true)

    // function handleClick() {

    // }

    // console.log(DeletedTask)

    return (
        <TableDiv>
            <table>
                <TableHeader>
                    <tr>
                        <th>Completed?</th>
                        <th>Task</th>
                        <th>Category</th>
                    </tr>
                </TableHeader>
                <TableBody>
                    {taskList.map(task => {
                        return (
                            <Task
                                key={task.id}
                                task={task.task}
                                category={task.category}
                                id={task.id}
                            />
                        )
                    })}
                </TableBody>
            </table>
            {/* <button>Delete Completed? Awesome Job!</button> */}
        </TableDiv>
    )
}

const TableDiv = styled.div`
padding: 30px;
background-image: url(${Rocks});
background-size: cover;
color: white;
`
const TableHeader = styled.thead`
font-size: 30px;
`

const TableBody = styled.tbody`
font-size: 20px;
`

export default Todolist