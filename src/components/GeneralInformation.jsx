export function GeneralInformation( { onSubmit, isEditable }){

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
        <p>Editable</p>
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