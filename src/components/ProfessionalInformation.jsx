export function ProfessionalInformation( {company, position, responsibilities, yearWorkedFrom, yearWorkedTo, onNext, onSave}){
  function editable(){
    return(
        <form action="GET" onSubmit={onSave} id='profinfo'>
            <div>
                <label>
                    Company
                    <input type="text" id="company" name="company" defaultValue={company}></input>
                </label>
                <label>
                    position
                    <input type="text" id="position" name="position" defaultValue={position}></input>
                </label>
                <label>
                    Responsibilties
                    <textarea name="responsibilities" id="responsibilities" defaultValue={responsibilities}></textarea>
                </label>
                <label>
                    Year you started working in the company
                    <input type="number" id="yearWorkedFrom" name="yearWorkedFrom" min="1900" max="2900" placeholder="YYYY" defaultValue={yearWorkedFrom}></input>
                </label>
                <label>
                    Year you stopped working for the company
                    <input type="number" id="yearWorkedTo" name="yearWorkedTo" min="1900" max="2900" placeholder="YYYY" defaultValue={yearWorkedTo}></input>
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    )
  }

  return(
    <div>
        <h1>Professional Information</h1>
        {editable()}
        <button onClick={onNext}>Next</button>
    </div>
  );
} 