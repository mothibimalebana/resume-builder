import './App.css';
import Cv from './components/cv/Cv';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'First Name': 'Your first name',
    'Last Name': 'Your surnmame',
    email: 'youremail@gmail.com',
    phone: '+27713346084',
    city: 'Townsville',
    province: 'Gauteng',
    role: 'Developer',
  });

  // const [education, setEducation] = useState('');
  return (
    <>
      <div className="form">
        <Form setUserResponse={setPersonalDetails} />
      </div>
      <div className="cv">
        <Cv userResponse={personalDetails} />
      </div>
    </>
  );
}

export default App;
