// import Test from './components/test'
// import Test1 from './components/test1'
// import Test2 from './components/test2'
// function App() {
//     return (
//     <div>
//      <Test/>
//      <Test1/>
//      <Test2/>
//     </div>
//   )
// }
// export default App

// import Table from "./components/table"
// function App() {
//   return (
//     <div>
//       <Table />
//     </div>
//   )
// }
// export default App

// import Image from "./components/image"
// function App() {
//     return (
//     <div>
//         <Image/>
//     </div>
//   )
// }
// export default App




// import Testt from "./components/Testt";
// function App(){
//     return (
//     <div>
//         <Testt />
//     </div>
//   );
// }
// export default App;




//Loginpage
// import LoginPage from "./components/loginpage";
// function App(){
//     return (
//     <div>
//         <LoginPage />
//     </div>
//   );
// }
// export default App;





//Class Component with State Management
// import React, { Component } from "react";

// class InputDisplay extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize state
//     this.state = {
//       inputValue: "", // To store the value of the input
//     };
//   }

//   // Handle input change and update the state
//   handleInputChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h2>Class Component: Input Display</h2>
//         <form>
//           <label>
//             Enter Text:
//             <input
//               type="text"
//               value={this.state.inputValue}
//               onChange={this.handleInputChange} // Update state on input change
//               style={{ marginLeft: "10px", padding: "5px" }}
//             />
//           </label>
//         </form>
//         <div style={{ marginTop: "20px" }}>
//           <h3>Output:</h3>
//           <p
//             style={{
//               fontSize: "18px",
//               color: this.state.inputValue ? "green" : "gray",
//             }}
//           >
//             {this.state.inputValue || "Type something to see it here..."}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default InputDisplay;








//Act 3
// import React, { useState, useEffect } from "react";

// const UserList = () => {
//   const [users, setUsers] = useState([]); // State to store the list of users
//   const [loading, setLoading] = useState(true); // State to handle loading state

//   // useEffect to simulate fetching user data
//   useEffect(() => {
//     // Simulated API call
//     const fetchUsers = async () => {
//       setLoading(true);
//       // Simulated user data
//       const userData = [
//         { id: 1, username: "Siddharth@123", name: "Siddharth Misal" , password: "12345678" },
//         { id: 2, username: "Swapnil@333", name: "Swapnil Devkate" , password: "88889999"},
//         { id: 3, username: "testUser", name: "Test User" , password: "54546479" },
//       ];
//       setTimeout(() => {
//         setUsers(userData); // Update the users state
//         setLoading(false); // Set loading to false
//       }, 1000); // Simulate network delay
//     };

//     fetchUsers(); // Call the fetchUsers function
//   }, []); // Empty dependency array ensures it runs only once

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>User List</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {users.map((user) => (
//             <li
//               key={user.id}
//               style={{
//                 margin: "10px 0",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 display: "inline-block",
//                 width: "200px",
//                 textAlign: "left",
//               }}
//             >
//               <strong>Username:</strong> {user.username}
//               <br />
//               <strong>Name:</strong> {user.name}
//               <br />
//               <strong>Password:</strong> {user.password}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;




//Login page day 6
// import Home from './components/home'
// import About from './components/about'
// import Login from './components/login'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './App.css'

// function Header() {
//   return (
//     <ul>
//       <h1>Vasantdada Patil College of Engg </h1>
//       <li><Link to="/home">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </ul>
//   )
// }

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App









import { useEffect } from "react"
function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    ).then(json => console.log(json))
  }, [])
  return (
    <div>

    </div>
  )
}
export default App