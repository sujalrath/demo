import { useState } from "react";
import Todos from "./Todo";

function Count()
{
    const[count,setCount]=useState(0);
    const todos = [{
    1: "Get the task"
  },
  {
    2: "Complete the task"
  }]

    const increment = () => {
        setCount((c) => c + 1);
      };

return(
    <>
      <Todos todos={todos} />
      <hr />
   
        Count: {count}
        <button onClick={increment}>+</button>
      
    </>
)
}
export default Count;
