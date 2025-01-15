export default function Cv({ sectionTitle, userResponse }) {
  return (
    <>
      <div>
        <h3>{sectionTitle}</h3>
        <div className="personalInfo">
          {userResponse ? (
            userResponse.map((respone) => {
              return <p key={crypto.randomUUID()}>{respone}</p>;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
