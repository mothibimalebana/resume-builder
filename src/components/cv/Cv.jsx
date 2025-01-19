export default function Cv({ sectionTitle, userResponse }) {
  console.log(userResponse);
  return (
    <>
      <div>
        <h3>{sectionTitle}</h3>
        <div className="personalInfo">
          {userResponse.firstName + ' ' + userResponse.secondName}
        </div>
      </div>
    </>
  );
}
