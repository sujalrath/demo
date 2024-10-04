import { useContext } from "react";
import Component3 from "./Component3";
import { UserContext } from "./Component1";

export default function Component2(){
    console.log("render 2");
    const user=useContext(UserContext);
    const color=useContext(UserContext);
    return( 
        <>
       <div style={{backgroundColor:user,color:color}}>
        <h2>Component2</h2>
        
        <Component3 />
        </div>
        </>
    );
}