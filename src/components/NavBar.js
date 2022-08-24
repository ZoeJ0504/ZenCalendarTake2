import React from "react"
import { Link } from "react-router-dom"
import Home from "../Page/Home"
import ToDoList from "../Page/ToDoPage"
import CalendarPage from "../Page/CalendarPage"
import Food from "../Page/Food"
import styled from '@emotion/styled'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import images from "../images/lotus.png"
function NavBar() {
    return (
        <NavBarDiv>

            <TitleDiv> <LotusImg src={images} alt="Lotus" /> ZenCalendar</TitleDiv>
            <Link to="/" element={<Home />}>Home</Link>
            <Link to="/todoList" element={<ToDoList />}> ToDoList</Link>
            <Link to="/calendar" element={<CalendarPage />}> Calendar</Link>
            <Link to="/food" element={<Food />}>Food</Link>
        </NavBarDiv>
    )
}
const NavBarDiv = styled.div`
font-size: 24px;
padding: 20px;
display:flex;
justify-content:space-between;
align-items: baseline;
background-color:#D4D2D5;
`
const LotusImg = styled.img`
width: 40px;
height:30px;
`
const TitleDiv = styled.div`
font-size: 40px;
`

export default NavBar