import React, { useState } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'react-calendar/dist/Calendar.css';
import { Scheduler } from "@aldabil/react-scheduler";
// import { EVENTS } from "./events";
import styled from 'styled-components'
import { Button } from "@mui/material";

function CalendarPage() {
    return (
        <CalendarPageDiv>
            <DailyDiv>
                <Scheduler
                    view="week"
                    // events={EVENTS}
                    month={null}
                    week={{
                        weekDays: [0, 1, 2, 3, 4, 5, 6],
                        weekStartOn: 0,
                        startHour: 6,
                        endHour: 22,
                        step: 60,
                    }}
                    day={{
                        startHour: 6,
                        endHour: 22,
                        step: 60,
                    }}
                />
            </DailyDiv>
            <CalendarDiv>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                />
            </CalendarDiv>

        </CalendarPageDiv>

    )
}
const CalendarPageDiv = styled.div`
background-color: #70798C;
display:flex;
justify-content: space-between;
`
const CalendarDiv = styled.div`
background-color: #B0BBBF;
height:75%;
width:500px;
padding: 20px;
margin: 30px;
`

const DailyDiv = styled.div`
padding: 20px;
background-color: #ADB6C4;
margin: 30px;
`
export default CalendarPage