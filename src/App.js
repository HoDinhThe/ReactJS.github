import "./App.css";

// Component
/* function Button() {
  return (
    <>
      <h1>Well come to Viet Nam</h1>
      <button>Click me!</button>
    </>
  );
}
export default function App() {
  return <Button />;
}*/

// JSX
/*const user = {
    name: "Nguyen Van A",
    age: 20,
    address: "Nghe An",
    image: "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
}
export default function Frofile(){
    return(
      <>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h2>{user.address}</h2>
        <img
            src={user.image}
            alt={"No image" + user.name}
            style={{ with: 50, height: 50}}
        />
      </>
    )
}*/

// Props
/*import React from 'react';

function User(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default function App() {
  const users = [
    { name: 'HoDinhThe', age: 28 },
    { name: 'React Developer', age: 30 },
    { name: 'Nguyen Van A', age: 22 }
  ]
  return (
    <div>
      <h2>User List</h2>
      {users.map((user, index) => (
        <User key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
}*/

// State
/*import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div>
      <p>Click {count} time</p>
      <button onClick={() => setCount(count + 1)}>
        
        Click me
      </button>
    </div>
  );
}
export default Counter;*/

import React, { useState } from 'react';

const ButtonClick = () => {
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <p>Nhấn nút lần {count}</p>
      <button onClick={handleClick}>Click me!</button> 
    </div>
  );
};

export default ButtonClick;



