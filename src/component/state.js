import { useState } from "react";

function FavouriteColor(){
    const[color,setColor]=useState("red");
    return(
        <>      
          <h1>My Favourite Color is {color}</h1>
          <button onClick={()=>setColor("blue")}>Blue</button>
          <button onClick={()=>setColor("red")}>red</button>
          <button onClick={()=>setColor("yellow")}>yellow</button>
          <button onClick={()=>setColor("white")}>white</button>
      </>
    );
}

export default FavouriteColor;