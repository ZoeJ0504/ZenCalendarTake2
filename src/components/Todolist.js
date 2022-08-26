import React from "react"
import styled from 'styled-components'
import Rocks from '../images/rocks4.jpeg'

function Todolist({ taskList }) {
    console.log(taskList)
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
                        return <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{task.task}</td>
                            <td>{task.category}</td>
                        </tr>
                    })}
                </TableBody>
            </table>
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