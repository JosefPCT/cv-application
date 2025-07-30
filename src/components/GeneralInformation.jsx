export function GeneralInformation( { onSubmit, isEditable, submitHandler, name, email, contactNumber }){

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
        <form action="GET" onSubmit={submitHandler}>
            <div>
                <label>
                    Name
                    <input type="text" id="name" name="name" defaultValue={name}></input>
                </label>
                <label>
                    Email
                    <input type="email" id="email" name="email"></input>
                </label>
                <label>
                    Phone Number
                    <input type="tel" id="contactNumber" name="contact-number"></input>
                </label>
            </div>
            <button type="submit">Save</button>
            <p>Test</p>
            {name}
            <p>Email:</p>
            {email}
            <p>Contact num:</p>
            {contactNumber}

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
        <button onClick={onSubmit}>Next</button>
    </div>
  );
}