import React, {
  useEffect,
  useState,
} from 'react';
const UserAdapter = {
  get: (id) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetch(`${url}/${id}`)
      .then(res => res.json());
  },
};
const App = () => {
  const [
    user, 
    setUser,
  ] = useState(null);
  useEffect(() => {
    UserAdapter
      .get(1)
      .then((dbUser) => {
        setUser(dbUser);
      });
  }, []);
  
  return (
    <div> 
    {
      user
        ? <h1>
            {user.name}
        </h1>
        : <p>
            loading...
        </p>
    }
    </div>
  );
};
export default App;