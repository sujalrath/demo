import { useState } from "react"



export default AddName 

  // const nameBox=undefined
function AddName(){

  const [friendsList, setFriendsList] = useState([]);
  const [newFriend, setNewFriend] = useState();

  

  const add = () => {
    setFriendsList([...friendsList, newFriend])
  }


  return (<div>
 

    
    <b>{friendsList.map(nm => <li>{nm}</li>)}</b>
    <input type="text" placeholder="add name" onChange={(e) => { setNewFriend(e.target.value) }} />
    <button onClick={add}>Add</button>



 


  </div>)

  }