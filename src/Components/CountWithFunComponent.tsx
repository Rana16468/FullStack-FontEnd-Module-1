import React from 'react';

type TProps={
    count:number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CountWithFunComponent = ({count,setCount}:TProps) => {
    return (
        <div className='m-3 border-y-yellow-600 bg-red-500'>
            <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
            
        </div>
    );
};

export default CountWithFunComponent;