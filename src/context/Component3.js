import { useContext } from "react";
import Component4 from "./Component4";
import { UserContext } from "./Component1";

export default function Component3(){
    console.log("render 3");
    const user=useContext(UserContext);
    const color=useContext(UserContext);
    return( 
        <>
       <div style={{backgroundColor:user,color:color}}>
        <h2>Component3</h2>
        <Component4 />
        </div>
        </>
    );
}