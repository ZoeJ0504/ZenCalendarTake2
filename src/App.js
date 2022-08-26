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
import Lily from "./images/Lily.jpeg"
import Stella from "./images/Stella.jpeg"
import Lady from "./images/lady.jpg"


function App() {
  const [puppyImage, setPuppyImage] = useState(false)
  const [puppyTwo, setPuppyTwo] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [puppyThree, setPuppyThree] = useState(false)
  const [puppyFour, setPuppyFour] = useState(false)
  const [puppyFive, setPuppyFive] = useState(false)


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

  function HandleClickThree() {
    setPuppyThree(!puppyThree)
  }

  function HandleClicFour() {
    setPuppyFour(!puppyFour)
  }

  function HandleClickFive() {
    setPuppyFive(!puppyFive)
  }

  const showAnotherPuppy = puppyTwo === true ? <ApolloImage src={Apollo} alt="Apollo" /> : ""
  const showPuppy = puppyImage === true ? <PorterImage src={Porter} alt="Porter" /> : ""
  const showYetAnotherPuppy = puppyThree === true ? <LilyImage src={Lily} alt="Lily" /> : ""
  const showPuppyFour = puppyFour === true ? <StellaImage src={Stella} alt="Stella" /> : ""
  const showPuppyFive = puppyFive === true ? <LadyImage src={Lady} alt="Lady" /> : ""
  return (

    <BigDiv className="App">
      <HiddenP>{showPuppy} {showAnotherPuppy} {showYetAnotherPuppy} {showPuppyFour} {showPuppyFive}</HiddenP>
      <NavBar handleClick={handleClick} handleClickTwo={handleClickTwo} />

      <Routes>
        <Route path="/" element={<Home taskList={taskList} HandleClicFour={HandleClicFour} />} />
        <Route path="/toDoList" element={< ToDoList handleSubmit={handleSubmit} taskList={taskList} HandleClickFive={HandleClickFive} />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/food" element={<Food HandleClickThree={HandleClickThree} />} />
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
const LilyImage = styled.img`
width: 501px;
height: 601px;
`
const StellaImage = styled.img`
width: 500px;
height: 600px;
`
const LadyImage = styled.img`
width: 600px;
height: 600px;
`


const BigDiv = styled.div`
background-color: #F5F1ED;
`
export default App;
