function Car(props) {
   
    return (
        <>
        <li>I am a { props.brand }</li>;
    </>
    );
  }
  
  function Cars(v){
   
    return (
    <ul>{
    v.map((car) =>{return(<Car brand={car} />) })
         }    </ul>
    );
  }
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        
      <>
      
          <h1>Cars in my garage?</h1>
          <button onClick={()=>Cars(cars)}>show cars</button>
          <br></br>
          <hr></hr>
          <br></br>
        
      </>
    );
  }
  
export default Garage;
 