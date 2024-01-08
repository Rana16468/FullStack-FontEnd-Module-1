

// import './App.css'

import { useState } from "react"
import CountWithFunComponent from "./Components/CountWithFunComponent"
import UserInfoWithUserReducer from "./Components/UserInfoWithUserReducer"
import TodoProvider from "./context/TodoProvider"
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"


function App() {
  const [count,setCount]=useState(0)
  

  return (
    <>
     <TodoProvider>
     

     <h1 className="text-3xl font-bold underline font-serif">
      Hello world!dsa
    </h1>
    <TodoForm/>
    <TodoList />
    <UserInfoWithUserReducer/>
    
   <div className="border-red-600 bg-green-500 "><h1>{count}</h1>
      <CountWithFunComponent count={count} setCount={setCount}/>
   </div>
   
     </TodoProvider>
    </>
  )
}

export default App
