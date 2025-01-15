import './App.css';
import Section from './components/form/Form';
import { personalDetails } from './data/Data';
import { useState } from 'react';

function App() {
  const [userResponse, setUserResponse] = useState('');
  console.log(userResponse);
  return (
    <>
      <Section
        sectionTitle="Personal Details"
        sectionContent={personalDetails}
        setUserResponse={setUserResponse}
      />
    </>
  );
}

export default App;
