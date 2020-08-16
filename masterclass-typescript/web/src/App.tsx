import React, { useState, useEffect } from "react";
import api from "./services/api";
import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get<IUser[]>("/users");
      setUsers(response.data);
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
