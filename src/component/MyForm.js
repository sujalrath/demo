import { useState } from "react";


function MyForm() {
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setUser([...user,{inputs}]);
    if(inputs.password!==inputs.cpass)
      {
        
        alert("password Not Match");
      }
      else{
       
        console.log(inputs);
        console.log(user);
      }
   

  }
 

  
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: 
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={handleChange}
      /></label><br></br><br></br>
       <label>Enter your last name:
      <input 
        type="text" 
        name="lastname" 
        value={inputs.lastname || ""} 
        onChange={handleChange}
      />
      </label><br></br><br></br>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label><br></br><br></br>
        <label>Enter your mobno:
      <input 
        type="number" 
        name="mob" 
        value={inputs.mob || ""} 
        onChange={handleChange}
      /></label><br></br><br></br>
       <label>Enter your email:
      <input 
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      /></label><br></br><br></br>
       <label>Enter your password:
      <input 
        type="text" 
        name="password" 
        value={inputs.password || ""} 
        onChange={handleChange}
      /></label><br></br><br></br>
       <label>confirm password:
      <input 
        type="text" 
        name="cpass" 
        value={inputs.cpass || ""} 
        onChange={handleChange}
      /></label><br></br><br></br>
        <input type="submit" />
    </form>
  )
}
export default MyForm;