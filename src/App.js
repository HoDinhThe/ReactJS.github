import "./App.css";

// 1. Component
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

// 2. JSX
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

// 3. Props
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

// 4. State
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

// 5. Event handling
/*import React, { useState } from 'react';

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

export default ButtonClick;*/

// 6. Kết xuất có điều kiện
/*function Items({ name, isPacked }) {
  /*if(isPacked){
    return <li className="item">{name}</li>
  }
  return <li className="item">Hello {name}</li>

  // Toán tử 3 ngôi
  /*return ( <li className="item">{isPacked ? name + "Hello" : name}</li>);

  // Toán tử logic &&
  /*return (
    <li className="items">{name} {isPacked && 'Hello'}</li>
  )
 let itemContent = name;
 if (isPacked) {
  itemContent = name + ' Hello'
 }
 return(
  <li>{itemContent}</li>
 )
}
export default function App() {
  return (
    <section>
      <h1>Danh sach user</h1>
      <ul>
        <Items isPacked={true} name="Space suit" />
        <Items isPacked={false} name="Photo of tom" />
      </ul>
    </section>
  );
}*/

// 7. Truyền Props cho một Component

/*import { getImageUrl } from './utils.js';
function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}*/


// 8. add state to a class component
/*import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
      
    });
    console.log(this.state.name)
  }

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Increment age
        </button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </>
    );
  }
}*/


// 9 Event

/*function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}*/

//10 Hook useState
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You click me {count} times
    </button>
  );
}



