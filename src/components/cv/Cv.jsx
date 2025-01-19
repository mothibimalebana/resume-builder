function SectionCv({ sectionTitle, userResponse }) {
  return (
    <>
      <div>
        <div className={sectionTitle}>{}</div>
      </div>
    </>
  );
}
export default function Cv({ userResponse }) {
  console.log(userResponse);
  return (
    <>
      <div>
        <SectionCv
          sectionTitle="Personal Details"
          userResponse={userResponse}
        ></SectionCv>
      </div>
    </>
  );
}
