import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';
const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function App() {
  const [users, setUsers] = useState<any>([]);
  const { data, error, isLoading } = useQuery(['user'], fetchUser);

  useEffect(() => {
    setUsers(data)
  },[data])
  return (
    <div className="App">
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
