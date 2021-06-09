import React from 'react';
import './App.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import UserForm from './hooks/UserForm';

function App() {
  return (
    <div className='App'>
      <CounterOne />
      <CounterTwo />
      <UserForm />
    </div>
  );
}

export default App;
