import React from "react"
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


function App() {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toDoList" element={< ToDoList />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/food" element={<Food />} />
      </Routes>


    </div>
  );
}

export default App;
