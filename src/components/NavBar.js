import React from "react"
import { Link } from "react-router-dom"
import Home from "../Page/Home"
import ToDoList from "../Page/ToDoPage"
import CalendarPage from "../Page/CalendarPage"
import Food from "../Page/Food"
import styled from '@emotion/styled'
import images from "../images/lotus.png"
function NavBar() {
    return (
        <NavBarDiv>

            <TitleDiv> <LotusImg src={images} alt="Lotus" /> ZenCalendar</TitleDiv>
            <Link to="/" >Home</Link>
            <Link to="/todoList" > ToDoList</Link>
            <Link to="/calendar" > Calendar</Link>
            <Link to="/food" >Food</Link>
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