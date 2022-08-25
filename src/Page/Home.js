import React, { useEffect, useState } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Todolist from "../components/Todolist"
import styled from 'styled-components'
import Quotes from "../components/Quotes"
import Image from "../images/rocks3.jpeg"

function Home() {

    return (
        <HomeDiv>

            <Quotes />
            <BigCalendarDiv>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                />
            </BigCalendarDiv>
            {/* <Todolist /> */}
        </HomeDiv>

    )
}

const HomeDiv = styled.div`
background-color: #F5F1ED;
`
const BigCalendarDiv = styled.div`
padding: 40px;
font-size: 10px;
height:75%;
width:700px;
background-image: url(${Image});
background-size: 100% 700px;
color: black;
`
export default Home