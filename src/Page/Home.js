import React, { useEffect, useState } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Todolist from "../components/Todolist"
import styled from 'styled-components'
import Quotes from "../components/Quotes"
import Image from "../images/rocks3.jpeg"

function Home({ taskList }) {

    return (
        <HomeDiv>

            <Quotes />
            <BiggerDiv>
                <BigCalendarDiv>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />

                </BigCalendarDiv>
                <ToDoDiv>
                    <Todolist taskList={taskList} />
                </ToDoDiv>

            </BiggerDiv>
        </HomeDiv>

    )
}

const HomeDiv = styled.div`
background-color: #F5F1ED;
margin: 20px;

`
const BigCalendarDiv = styled.div`
padding: 40px;
font-size: 10px;
height:75%;
width:700px;
background-image: url(${Image});
background-size: 100% 700px;
color: black;
margin-bottom: 50px;
`

const BiggerDiv = styled.div`
margin: 20px;
display: flex;
justify-content: space-around;
`

const ToDoDiv = styled.div`
width: 550px; 
`
export default Home