import './App.css';
import Cv from './components/cv/Cv';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  const [personalDetails, setPersonalDetails] = useState('');
  console.log(personalDetails);
  return (
    <>
      <div className="form">
        <Form setUserResponse={setPersonalDetails} />
      </div>
      <div className="cv">
        <Cv userResponse={personalDetails} sectionTitle="Personal Details" />
      </div>
    </>
  );
}

export default App;
