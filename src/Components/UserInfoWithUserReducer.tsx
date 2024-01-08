import  { ChangeEvent, useReducer } from 'react';

const UserInfoWithUserReducer = () => {

    const initalState={
        name:"",
        age:"",
        hobbies:[]  as string[],

    }
    type TActions={
        type:string,
        payload:string
    }

    const reducer=(currentState:typeof initalState,action:TActions )=>{

        switch (action.type) {

            
            case "addName":return{

                ...currentState,
                name:action.payload
                
            } 
            case "addAge":return{
                ...currentState,
                age:action.payload
            }
            case "addHobbies":return{
                ...currentState,
                hobbies:[...currentState.hobbies,action.payload]
            }
                
            default:
              return currentState
        }


    }


    
    const [state,dispatch]=useReducer(reducer,initalState);
    const handelSubmit=(e:ChangeEvent<HTMLFormElement>)=>{

        e.preventDefault()

        console.log(state);
    }
    return (
        <>
        <form onSubmit={handelSubmit} className='m-3 flex justify-center' action="">
            <input onChange={(e)=>dispatch({type:"addName",payload:e.target.value})} className='border m-1' type="text" id="name" name="name" placeholder='name'/>
            
            
            <input onChange={(e)=>dispatch({type:"addAge",payload:e.target.value})} className='border m-1' type="text" id="age" name="age" placeholder='age'/>
            
            
            <input onBlur={(e)=>dispatch({type:"addHobbies",payload:e.target.value})} className='border m-1' type="text" id="hobbies" name="hobbies" placeholder='hobbies'/>
            <button type='submit' className='btn'>Submit</button>
        </form>
            
        </>
    );
};

export default UserInfoWithUserReducer;