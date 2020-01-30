import React, { useState, useEffect } from "react";

const Users = () => {
    const [data, setData] = useState([]);
    
  useEffect(()=> {

      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // make sure to check for errors
          return response.json();
        })
        .then(json => {
            setData(json)
        });
  }, [])
  
    return (
      <ul>
        {data.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    );
  
}

export default Users