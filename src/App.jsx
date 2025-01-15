import './App.css';
import Form from './components/form/Form';
import { personalDetails } from './data/Data';
import { useState } from 'react';

function App() {
  const [userResponse, setUserResponse] = useState('');

  function handleFormSubmit() {
    console.log('reached destination');
  }
  return (
    <>
      <Form
        personalDetails={personalDetails}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
}

export default App;
