export function Confirmation( {genInfo, educInfo, profInfo} ){
  function compiledInformation(){
    return (
      <section>
        <h3>General Information</h3>
        <p>Name: {genInfo.name}</p>
      </section>
    );
  }

  return(
    <div>
        {compiledInformation()}
    </div>
    
  );
}