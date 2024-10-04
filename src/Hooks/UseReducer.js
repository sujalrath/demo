import { useReducer } from "react"
const initialState=0;

const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="Increment")
    {
        return state+1;
    }
    if(action.type==="Dercrement")
    {
        return state-1;
    }
    return state;
}
function UseReducer()
{
    const[state,dispatch] = useReducer(reducer,initialState);
    
    return (
<>
 <h3>{state}</h3>
  <button onClick={()=>dispatch({type: "Increment"})}>Increment</button>
  <button onClick={()=>dispatch({type: "Dercrement"})}>Decrement</button>
</>

    );
}
export default UseReducer;