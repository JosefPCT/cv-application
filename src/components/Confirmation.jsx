export function Confirmation( {genInfo, educInfo, profInfo} ){
  function displayGenInfo(){
    return (
      <section>
        <h3>General Information</h3>
        <p>Name: {genInfo.name}</p>
        <p>Email: {genInfo.email}</p>
        <p>Contact Number: {genInfo.contactNumber}</p>
      </section>
    );
  }

  function displayEducInfo(){
    return (
      <section>
        <h3>Educational Information</h3>
        <p>School Name: {educInfo.school}</p>
        <p>Course: {educInfo.course} </p>
        <p>Year Graduated: {educInfo.graduateYear}</p>
      </section>
    );  
  }

  function displayProfInfo(){
    return(
      <section>
        <h3>Professional Information</h3>
        <p>Company: {profInfo.company}</p>
        <p>Position: {profInfo.position}</p>
        <p>Responsibilities: {profInfo.responsibilities}</p>
        <p>Started working on year: {profInfo.yearWorkedFrom}</p>
        <p>Stopped working on year: {profInfo.yearWorkedTo}</p>
      </section>
    );
  }

  return(
    <div>
        {displayGenInfo()}
        {displayEducInfo()}
        {displayProfInfo()}
    </div>
    
  );
}