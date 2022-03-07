import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [friends,setfriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setfriends(data))
  },[])
  //const friends= [{name:'Mamun', age:35},{name: "Sohel", age:34}, {name:"Faruk", age:33},{name: "jasim", age:36}];
  //const age = [34,35,36,37];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Friendscounter></Friendscounter>
        {/* <Friends name={friends[1]} age={age[1]}></Friends>
        <Friends name={friends[0]} age={age[0]}></Friends>
        <Friends name={friends[2]} age={age[2]}></Friends>
        <Friends name={friends[3]} age={age[3]}></Friends> */}
        {
          friends.map(friend=><Friends name={friend.name} key = {friend.id}age={friend.age}></Friends>)
        }
        

      </header>
    </div>
  );
}
function Friendscounter(){
const [count, setCount] = useState(1);
const handleClick = ()=> setCount(count + 1);
const buttonStyle = {
  border:'2px solid red',
  backgroundColor:'blue',
  borderRadius:'10px',
  padding:'0 10px'
}
  return(
    <div>
      <button style={buttonStyle} onClick={handleClick}><h2>Add Friends</h2></button>
      <h3 style={{color:'yellow'}}>Number of friends : {count}</h3>
      <Displayfriends count = {count + 1}></Displayfriends>
      <Displayfriends count = {count + 2}></Displayfriends>
      <Displayfriends count = {count + 3}></Displayfriends>
    </div>
  )
}

function Displayfriends(props){
  return <h4>I have 5 friends : {props.count}</h4>
}
function Friends(props){
  const friendsStyle= {
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  return (
    <div style={friendsStyle}>
      <h1>I am your friend: {props.name}</h1>
      <h2>Age:{props.age}</h2>
      <h3>We are going to picnic</h3>
    </div>
  )
}

export default App;
