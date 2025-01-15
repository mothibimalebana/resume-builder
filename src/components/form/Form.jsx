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

export function Section({ sectionTitle, sectionContent }) {
  function handleSubmit(event) {
    event.preventDefault(); //prevent form default behaviour
  }
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
