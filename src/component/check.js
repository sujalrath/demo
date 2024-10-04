
function Sum(props){
  return  <div>
    <h1>Hello sujal! are you {props.age} years old. and you live in {props.address.city}.</h1>
  
</div>
}

function Check(props) {
  const age=22;
  const addressInfo={city:"Indore", country:"India"}
  return (
    <div className="App">
      <h1>Hello sujal! Do you have {props.color} colour.</h1>
      <Sum age={age} address={addressInfo}/>
      
    </div>
   
  );
}


export default Check;
