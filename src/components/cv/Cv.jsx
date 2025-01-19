function SectionCv({ sectionTitle, userResponse }) {
  function getResponseContent() {
    let content = [];
    for (let key in userResponse) {
      let item = userResponse[key];
      content.push(
        <p key={key} id={key}>
          {item}
        </p>
      );
    }
    return content;
  }
  return (
    <>
      <div className={sectionTitle}>{getResponseContent()}</div>
    </>
  );
}
export default function Cv({ userResponse }) {
  console.log(userResponse);
  return (
    <>
      <SectionCv sectionTitle="Personal Details" userResponse={userResponse} />
    </>
  );
}
