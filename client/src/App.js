import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Leftpannel from './components/Leftpannel';
import Rightpannel from './components/Rightpannel';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Doctors Appointment",
      date: "20 Apr, 2021",
      time: "12:10",
      status: false
    },
    {
      id: 2,
      title: "Doctors",
      date: "29 Apr, 2021",
      time: "10:10",
      status: false
    },
    {
      id: 3,
      title: "Appointment",
      date: "5 May, 2021",
      time: "19:10",
      status: false,
    }
  ])

  const [selectedDate, setSelectedDate] = useState(new Date())
  
  const toggleStatus = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, status: !todo.status} : todo))
  }

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 99999) + 1

    const newTodo = { id, ...todo}
    setTodos([ ...todos, newTodo])
    
  }

  const handleOnChange = (Date) => {
    setSelectedDate(Date)
}

const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

const searchDate = selectedDate.getDate() + " " + mon[selectedDate.getMonth()] + ", " + selectedDate.getFullYear()

const filteredTodos = todos.filter(todo => todo.date === searchDate)

  // const getTodo = (date) => {
  //   setTodos(todos.map((todo) => todo.date === date ? 
  //   console.log(todo) : todo))
  // }

  return (
    <div className="App">
      <Header className="fixed"/>
      <div className="flex border-2 h-full">
        <div className="flex-initial" >
          <Leftpannel selectedDate={selectedDate} setSelectedDate={handleOnChange} />
        </div>
        <div className="flex-auto border-l-2 border-r-2 border-red-500 h-screen">
          <Todos className="flex" todos={filteredTodos} onToggle={toggleStatus} />
        </div>
        <div className="flex-1 items-center">
          <Rightpannel className="flex" onAdd={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
