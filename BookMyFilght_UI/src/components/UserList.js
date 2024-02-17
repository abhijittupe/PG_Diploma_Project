// import React, { useState, useEffect } from 'react';
// import Header from "./Header";
// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUserList();
//   }, []);

//   const fetchUserList = async () => {
//     try {
//       const response = await fetch('http://localhost:8980/getall');
//       if (!response.ok) {
//         throw new Error('Failed to fetch user list');
//       }
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mt-5 mb-5">
//         <Header />
//       <h1 className="mb-4">User List</h1>
//       <h1 className="mb-4 text-center" >User List</h1>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>User Id</th>
//             <th>Username</th>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.userId}>
//               <td>{user.userId}</td>
//               <td>{user.username}</td>
//               <td>{user.fname}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default UserList;

import React, { useState, useEffect } from 'react';
import Header from "./Header";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch('http://localhost:8980/getall');
      if (!response.ok) {
        throw new Error('Failed to fetch user list');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8980/delete/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <Header />
      <h1 className="mb-4 text-center">User List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.fname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.userId)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
