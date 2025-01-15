import { personalDetails } from '../../data/Data';

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

export function Section({ sectionTitle, sectionContent, setUserResponse }) {
  function handleResponse(event) {
    let userResponse = [];
    const sectionLength = sectionContent.length;
    for (let i = 0; i < sectionLength; i++) {
      userResponse.push(event.target[i].value);
    }
    setUserResponse(userResponse);
    event.preventDefault();
  }

  return (
    <>
      <div>
        <h3>{sectionTitle}</h3>
        <form action="#" onSubmit={handleResponse}>
          {sectionContent.map((sectionItem) => {
            return (
              <Input
                title={sectionItem.title}
                width={sectionItem.width}
                height={sectionItem.height}
                required={sectionItem.required}
                type={sectionItem.type}
                key={sectionItem.key}
              />
            );
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default function Form({ setUserResponse }) {
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
