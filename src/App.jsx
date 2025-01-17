import './App.css';
import Cv from './components/cv/Cv';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: 'Your first name',
    secondName: 'Your surnmame',
    email: 'youremail@gmail.com',
    phone: '+27713346084',
    city: 'Townsville',
    province: 'Gauteng',
  });
  console.log(personalDetails);
  const [education, setEducation] = useState('');
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
