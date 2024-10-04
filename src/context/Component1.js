import { createContext, useState } from "react";
import Component2 from "./Component2";

export const UserContext=createContext();

function Component1()
{
    const[data,setData]=useState("");
    const[color,setColor]=useState("");

const handleDarkTheme=()=>{
    setColor("black")
    setData("orange")
}
return(
    <UserContext.Provider value={data} color={color} >
     
        <button onClick={handleDarkTheme}>Dark</button>
        <Component2 />
    </UserContext.Provider>
)
}
export default Component1;
