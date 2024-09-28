import React, {useState} from 'react'
import "./App.css";

// display data
const Admin = {
  name: "Nguyen A",
  age: 20,
  image:
    "https://photo.znews.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg",
};
function MyButton() {
  return <button>Click me!</button>;
}
// props
function Student(props) {
  return (
    <div>
      <h2>Tên: {props.name}</h2>
      <p>Tuổi: {props.age}</p>
    </div>
  );
}
function AdminPanel(){
  <div>Admin</div>
}
function LoginForm(){
  <div>Login</div>
}

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  let content;
  if (isLogged) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (
    //jsx
    <div className="avatar">
      <h1>Well come to Viet Nam</h1>
      <h2>{Admin.name}</h2>
      <img
        src={Admin.image}
        alt=""
        style={{
          with: "30px",
          height: "100px",
        }}
      />
      <div>
      <Student name="HoDinhThe" age={25} />
      <Student name="NguyenVanA" age={22} />
    </div>
      {/* component */}
      <MyButton />
      <h1>{content}</h1>
    </div>
  );
}

