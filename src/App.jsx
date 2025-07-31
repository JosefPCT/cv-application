import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { GeneralInformation } from './components/GeneralInformation'
import { EducationalInformation } from './components/EducationalInformation';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [genInfo, setGenInfo] = useState( {name: "Steve", email: null, contactNumber: null} );
  const [educInfo, setEducInfo] = useState( {school: 'FCAN', course: 'BSCS', graduateYear: 2016} );
  const [profInfo, setProfInfo] = useState( {company: null, position: null, responsibilities: null, yearWorkedFrom: null, yearWorkedTo: null } )

  const pages = [
  <Home onSubmit={nextHandler} />, 
  <GeneralInformation name={genInfo.name} email={genInfo.email} contactNumber={genInfo.contactNumber} onSubmit={nextHandler} isEditable={true} submitHandler={changeInfoHandlerHandler}/>,
  <EducationalInformation school={educInfo.school} course={educInfo.course} graduateYear={educInfo.graduateYear} onNext={nextHandler} onSave={changeInfoHandlerHandler} />
   ];

  function nextHandler(){
    pageIndex !== pages.length - 1 ? setPageIndex(pageIndex + 1) : setPageIndex(0);
  }

  function changeInfoHandlerHandler(e){
    e.preventDefault();
    let info = e.target;
    switch(info.id){
      case 'geninfo':
        console.log('general information');
        setGenInfo({
          ...genInfo, 
          name: info.name.value, 
          email: info.email.value, 
          contactNumber: info.contactNumber.value
        })
      break;
      case 'educinfo':
        console.log('educational information');
        setEducInfo( {
          ...educInfo, 
          school: info.school.value, 
          course: info.course.value, 
          graduateYear: info.graduateYear.value })
      break;
      case 'profinfo':
        console.log('professional information');
      break;
      default:
        console.log('invalid choice');
    }

  }


  return (
    <>
      {pages[pageIndex]}
    </>
  )
}

export default App
