import {} from '../../data/Data'
/**
 * Input field with label and textbox for user to enter input
 * @param {string} title  title of the input, i.e first name:
 * @returns {JSX}
 */
function InputField({ title, type, width = '900', height = '80' }) {
  return (
    <>
      <div className="inputField">
        <label htmlFor="username">{title}: </label>
        <input
          type={type}
          name="username"
          width={width}
          height={height}
          autoComplete="home city"
          required
        />
      </div>
    </>
  );
}
function Section({ title, userInfo }) {
  return (
    <>
      <h3>{title}</h3>
      {userInfo.map((field) => {
        return <InputField key={field} title={field} userInfo={} />;
      })}
    </>
  );
}
export default function Form() {
  return (
    <>
      <div className="Form">
        <h1>Dashboard</h1>
        <Section title={personalDetail} />
      </div>
    </>
  );
}
