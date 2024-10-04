import { useState } from "react";



function Person(){
    const[Info,setInfo]=useState({
        firstName:"Sujal",
        lastName:"Rathore",
        age:22,

    });
    const updateName = () => {
        setInfo((previousState) => {
          return { ...previousState, firstName: "Ritik" }
        });
       
    }
    console.log(Info);
return(
    <>
    
    <h1>My name is {Info.firstName} and age is {Info.age}</h1>
    <button
        type="button"
        onClick={updateName}
      >Ritik</button>
    </>
);
}
export default Person;