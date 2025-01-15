import { personalDetails } from '../../data/Data.jsx';
import { useState } from 'react';

//Input component generates a label and a input
function Input({ title, width, height, required, type }) {
  return (
    <>
      <label htmlFor={title + type}>{title}</label>
      <input
        type={type}
        height={height}
        width={width}
        required={required}
        id={title + type}
      ></input>
    </>
  );
}

function Section({ sectionTitle, sectionContent }) {
  const [userResponse, setUserResponse] = useState('first render');

  function handleSubmit(event) {
    //get response values:
    const newUserResponse = []; //array to contain new user response
    for (let i = 0; i < sectionContent.length; i++) {
      newUserResponse.push(event.target[i].value);
      setUserResponse(newUserResponse);
    }
    event.preventDefault(); //prevent form default behaviour
  }
  console.log(userResponse);
  return (
    <>
      <h3>{sectionTitle}</h3>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          {/* personal details secion */}
          {sectionContent.map((inputElem) => {
            return (
              <Input
                title={inputElem.title}
                width={inputElem.width}
                height={inputElem.height}
                required={inputElem.required}
                type={inputElem.type}
                key={inputElem.key}
              />
            );
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default function Form() {
  return (
    <>
      <div>
        <Section
          sectionTitle="Personal Details"
          sectionContent={personalDetails}
        />
      </div>
    </>
  );
}
