import './App.css';
import Cv from './components/cv/Cv';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  const [personalInfo, setpersonalInfo] = useState({
    'First Name': 'Your first name',
    'Last Name': 'Your surnmame',
    role: 'Developer',
  });

  // const [education, setEducation] = useState('');
  return (
    <>
      <div className="form">
        <Form setUserResponse={setpersonalInfo} />
      </div>
      <div className="cv">
        <Cv userResponse={personalInfo} />
      </div>
    </>
  );
}

export default App;
