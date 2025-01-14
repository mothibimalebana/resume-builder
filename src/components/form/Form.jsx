import { personalDetails } from '../../data/Data';
/**
 * Input field with label and textbox for user to enter input
 * @param {string} title  title of the input, i.e first name:
 * @returns {JSX}
 */
function InputField({ title, type, width = '900', height = '80' }) {
  return (
    <>
      <div className="inputField">
        <label htmlFor={title + type}>{title}: </label>
        <input
          id={title + type}
          type={type}
          name={title + type}
          width={width}
          height={height}
          required
        />
      </div>
    </>
  );
}
function Section({ title, queryUserInfo }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  function submitDialog() {}
  return (
    <>
      <dialog id="Dialog" onSubmit={submitDialog} open>
        <form action="#" id="Form" method="dialog" onSubmit={handleSubmit}>
          <h3>{title}</h3>
          {queryUserInfo.map((field) => {
            return <InputField key={crypto.randomUUID()} title={field} />;
          })}
          <button type="submit">Submit</button>
        </form>
      </dialog>
    </>
  );
}
export default function Form() {
  return (
    <>
      <div className="Form">
        <h1>Dashboard</h1>
        <Section title="Personal Details" queryUserInfo={personalDetails} />
      </div>
    </>
  );
}
