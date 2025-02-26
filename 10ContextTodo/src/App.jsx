import { useEffect, useState } from "react"
import { todoContext, TodoProvider } from "./Contexts"
import TodoForms from "./Components/TodoForms"
import TodoItem from "./Components/TodoIteam"

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    // const storedTodos = localStorage.getItem("todos");
    // if (storedTodos) {
    //   setTodos(JSON.parse(storedTodos)); // Parse the JSON string to an array
    // }

    const storedTodos =JSON.parse(localStorage.getItem("todos"))
    if(storedTodos && storedTodos.lenght > 0){
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])


  return (
    <TodoProvider value={{ Todos, addTodo, updateTodo, deleteTodo, completeTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForms />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => {
              return <div key={todo.id}
                className="w-full"
              >
                <TodoItem todo={todo} />
              </div>
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
