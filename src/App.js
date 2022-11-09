// import { useState } from "react";
// import AddUserForm from "./forms/AddUserForm";
// import UserTable from "./tables/UserTable";
// import EditUserForm from "./forms/EditUserForm";


// function App() {

// const usersData = [
//     {id:1,name:'Antony',username:'jantony'},
//     {id:2,name:'Vimal',username:'vimalllll'},
//     {id:3,name:'Anto',username:'atonyyyyy'},
//     {id:4,name:'vijay',username:'vijaylllll'},
//     {id:5,name:'vikram',username:'vikramyyyyy'},
// ];

// const addUser = (user)=>{
//     user.id = users.length + 1;
//     setUsers([...users,user])
// }
// const deleteUser = (id)=>{
//     setUsers(users.filter((user)=>user.id!==id))
//     setEditing(false);
// }

//     const [users,setUsers] = useState(usersData);
//     const [editing,setEditing] = useState(false)
    

//     const initialFormState = {id:null,name:'',username:''}

//     const [currentUser,setCurrentUser] = useState(initialFormState);

//     const editRow = (user)=>{
//         setEditing(true);
//         setCurrentUser({id:user.id,name:user.name,username:user.username});
//     }

//     const updateUser = (id,updatedUser)=>{
//         setEditing(false);
//         setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
//     }

//   return (
//     <div className="container">
//       <h1>CRUD App with Hooks</h1>
//       <div className="flex-row">
//         <div className="flex-large">
//             {editing?(<div>
//                 <h2>Edit User</h2>
//                 <EditUserForm 
//                     setEditing={setEditing}
//                     currentUser={currentUser}
//                     updateUser={updateUser}
//                 />
//             </div>):(<div>
//                 <h2>Add user</h2>
//           <AddUserForm addUser={addUser} />
//           </div>
//             ) 
//         }
//         </div>
//         <div className="flex-large">
//           <h2>View users</h2>
//           <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';



function App() {
  return (
      <div>
       <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
        </Routes>
       </Router>
      </div>
  )
}

export default App;
