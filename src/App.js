import React, { useState, useEffect } from "react"
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Page/Home"
import ToDoList from './Page/ToDoPage';
import CalendarPage from './Page/CalendarPage';
import Food from "./Page/Food"
import Porter from "./images/Porter.JPG"
import styled from '@emotion/styled'
import Apollo from "./images/BabyApollo.jpg"

function App() {
  const [puppyImage, setPuppyImage] = useState(false)
  const [puppyTwo, setPuppyTwo] = useState(false)
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then(res => res.json())
      .then(data => setTaskList(data))
  }, [])

  function handleSubmit(newTask) {
    setTaskList([...taskList, newTask])
  }

  function handleClick() {
    setPuppyImage(!puppyImage)
  }

  function handleClickTwo() {
    setPuppyTwo(!puppyTwo)
  }
  const showAnotherPuppy = puppyTwo === true ? <ApolloImage src={Apollo} alt="Apollo" /> : ""
  const showPuppy = puppyImage === true ? <PorterImage src={Porter} alt="Porter" /> : ""
  return (

    <BigDiv className="App">
      <HiddenP>{showPuppy} {showAnotherPuppy}</HiddenP>
      <NavBar handleClick={handleClick} handleClickTwo={handleClickTwo} />

      <Routes>
        <Route path="/" element={<Home taskList={taskList} />} />
        <Route path="/toDoList" element={< ToDoList handleSubmit={handleSubmit} taskList={taskList} />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/food" element={<Food />} />
      </Routes>


    </BigDiv>
  );
}
const PorterImage = styled.img`
width: 500px;
height: 600px;
`
const HiddenP = styled.div`
background-color: #D4D2D5;
`
const ApolloImage = styled.img`
width: 500px;
height: 600px;
`

const BigDiv = styled.div`
background-color: #F5F1ED;
`
export default App;
