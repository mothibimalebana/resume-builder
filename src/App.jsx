import './App.css';
import Form from './components/form/Form';

function App() {
  const [userResponse, setUserResponse] = useState('');
  //get response values:
  const newUserResponse = []; //array to contain new user response
  for (let i = 0; i < sectionContent.length; i++) {
    newUserResponse.push(event.target[i].value);
    event.target[i].value = '';
    setUserResponse(newUserResponse);
  }

  return (
    <>
      <Form />
    </>
  );
}

export default App;
