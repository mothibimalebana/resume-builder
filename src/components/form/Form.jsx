//Input component generates a label and a input
function Input({ title, width, height, required, type }) {
  function handleSubmit(event) {
    event.target[0].value = ''; //clear input
    event.preventDefault(); //prevent form default behaviour
  }

  return (
    <>
      <div className="inputFormDiv">
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor={title + type}>{title}</label>
          <input
            type={type}
            height={height}
            width={width}
            required={required}
            id={title + type}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default function Form() {
  return (
    <>
      <div>
        <Input
          title="Name"
          width="900"
          height="180"
          required={true}
          type="text"
        />
      </div>
    </>
  );
}
