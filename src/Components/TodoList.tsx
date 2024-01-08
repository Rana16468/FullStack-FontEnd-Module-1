import  { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';

const TodoList = () => {

    type TTodo={
        id:string,
        title:string;
        isCompleted:boolean
    };
    const {state,dispatch}=useContext(TodoContext);
    return (
        <>

        {
           state.map((v:TTodo,index:number)=><p onClick={()=>dispatch({type:"TaskCompleted",payload:v.id})} className={`cursor-pointer ${v.isCompleted?"line-through":""}`} key={index}>{v.title}</p>)
        }
            
        </>
    );
};

export default TodoList;