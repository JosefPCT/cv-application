export function EducationalInformation( {school, course, graduateYear, onSave}){


  function editable(){
    return( 
        <form action="GET" onSubmit={onSave} id='educinfo'>
            <div class="form-container card-container">
                <label>
                    Name of School
                    <input type="text" id="school" name="school" defaultValue={school}></input>
                </label>
                <label>
                    Course
                    <input type="text" id="course" name="course" defaultValue={course}></input>
                </label>
                <label>
                    Year Graduated
                    <input type="number" id="graduateYear" name="graduateYear" min="1900" max="2900" placeholder="YYYY" defaultValue={graduateYear}></input>
                </label>
            </div>
            <button type="submit">Next</button>
        </form>
    );
  }

  return(
    <div>
        <h1>Educational Information</h1>
        {editable()}
    </div>
  );
}