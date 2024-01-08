import  {  FormEvent, useContext, useState } from 'react';
import  { TodoContext } from '../context/TodoProvider';

const TodoForm = () => {
//https://www.programiz.com/javascript/examples/generate-random-strings
    const { title,state,dispatch}=useContext(TodoContext);
    const [task,setTask]=useState("")

    const handelSubmit=(e:FormEvent)=>{
        e.preventDefault();

        const data={
            id:Math.random().toString(36).substring(2,7),
            title:task,
            isCompleted:false

        }

        dispatch({type:"AddTodo",payload:data})

    }
    console.log(state)


    return (
        <>

        Add TODO :{title}
        <form  onSubmit={handelSubmit}>

            <label htmlFor='todo'>Task</label>
            <input onBlur={(e)=>setTask(e.target.value)} type="text" id="task" name="task"/>
            <button type='submit'>Submit</button>
        </form>
            
        </>
    );
};

export default TodoForm;