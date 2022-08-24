import React from "react"
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';

function Todolist({ taskList }) {
    console.log(taskList)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Completed?</th>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Remove?</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map(task => {
                        return <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>{task.task}</td>
                            <td>{task.category}</td>
                            <td>
                                <button>X</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Todolist