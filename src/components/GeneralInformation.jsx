export function GeneralInformation( { onSubmit, isEditable }){

  if(isEditable){
   return(
    <p>Editable</p>
   );
  } else {
    return(
      <p>Not editable</p>
    );
  }

//   return (
//     <div>
//         <h1>General Information</h1>
//         <button onClick={onSubmit}>Next</button>
//     </div>
//   );
}