import { Typography } from "@mui/material"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react"

function App() {
const [todo, setTodo] = useState([])
const [todovalue, setTodovalue] = useState('')

const addTodo = (activity, date) => {
  const newTodoList = [...todo, {
    activity,
    date
  }]
  setTodo(newTodoList);
}
const delTodo = (activity) => {
  const newTodoList = todo.filter((todo) => todo.activity !== activity )
  setTodo(newTodoList)
}
useEffect(() => {
  console.log(todo)
}, [todo]);

const editTodo = (activity) => {
  setTodovalue(activity);
  delTodo(activity);
}

  return (
    <>
      <Typography variant="h4" textAlign={'center'} marginY={'20px'}>TodoList App</Typography>
      <TodoInput addTodo={addTodo} todovalue={todovalue}/>
      {
        todo.length > 0 && todo.map((todo, i) => {
          return <TodoItem key={i} todo={todo} delTodo= {delTodo} editTodo={editTodo} />
        })
      }
    </>
  )
}

export default App
