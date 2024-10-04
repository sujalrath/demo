import { useContext } from "react"
import { UserContext } from "./Component1";


export default function Component4(){
    console.log("render 4");
    const user=useContext(UserContext);
    const color=useContext(UserContext);
    return( 
        <>
      <div style={{backgroundColor:user,color:color}}>

        <h2>Component4</h2>
         <h5>Hello {user}</h5>
         </div>
        
        </>
    )
}