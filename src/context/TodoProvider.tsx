import  { ReactNode, createContext, useReducer } from 'react';

type TodoProviderProps={
    children:ReactNode
}
type TTodo={
    id:string,
    title:string;
    isCompleted:boolean
};
type TAction={
    type:string;
    payload:TTodo | string
}
export const TodoContext=createContext<{state:TTodo[],dispatch: React.Dispatch<TAction>} | undefined>(undefined);
const TodoProvider = ({children}:TodoProviderProps) => {
  
   
    // current state type 
    

    const initalState:TTodo[]=[];

    const reducer=(currentState:TTodo[],action:TAction)=>{

        switch (action.type) {
            case "AddTodo":return [...currentState,action.payload]
            case "TaskCompleted":return currentState.map((item)=>item.id===action.payload?{...item,isCompleted:!item.isCompleted}:item)
    
            default:
              return  currentState 
        }


    }

    const [state,dispatch]=useReducer(reducer,initalState)

   

    const values={
        title:"A M SOHEL RANA",
       state,dispatch
    }

    return (
       <TodoContext.Provider value={values}>
        {children}
       </TodoContext.Provider>
    );
};

export default TodoProvider;