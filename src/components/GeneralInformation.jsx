export function GeneralInformation( { onNext, isEditable, onSave, name, email, contactNumber }){

//   if(isEditable){
//    return(
//     <p>Editable</p>
//    );
//   } else {
//     return(
//       <p>Not editable</p>
//     );
//   }

 function editable(){
    return(
        <form action="GET" onSubmit={onSave} id='geninfo'>
            <div>
                <label>
                    Name
                    <input type="text" id="name" name="name" defaultValue={name}></input>
                </label>
                <label>
                    Email
                    <input type="email" id="email" name="email" defaultValue={email}></input>
                </label>
                <label>
                    Phone Number
                    <input type="tel" id="contactNumber" name="contact-number" defaultValue={contactNumber}></input>
                </label>
            </div>
            <button type="submit">Next</button>
        </form>
    );
 }

 function notEditable(){
    return(
        <p>Not Editable</p>
    )
 }

  return (
    <div>
        <h1>General Information</h1>
        {isEditable ? editable() : notEditable()}
        <button onClick={onNext}>Next</button>
    </div>
  );
}