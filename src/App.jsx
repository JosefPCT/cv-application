import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { GeneralInformation } from './components/GeneralInformation'
import { EducationalInformation } from './components/EducationalInformation';
import { ProfessionalInformation } from './components/ProfessionalInformation';
import { Confirmation } from './components/Confirmation';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [genInfo, setGenInfo] = useState( {name: "Steve", email: null, contactNumber: null} );
  const [educInfo, setEducInfo] = useState( {school: 'FCAN', course: 'BSCS', graduateYear: 2016} );
  const [profInfo, setProfInfo] = useState( {company: null, position: null, responsibilities: null, yearWorkedFrom: null, yearWorkedTo: null } )

  const pages = [
  <Home onSubmit={nextHandler} />, 
  <GeneralInformation name={genInfo.name} email={genInfo.email} contactNumber={genInfo.contactNumber} onNext={nextHandler} isEditable={true} onSave={changeInfoHandlerHandler}/>,
  <EducationalInformation school={educInfo.school} course={educInfo.course} graduateYear={educInfo.graduateYear} onNext={nextHandler} onSave={changeInfoHandlerHandler} />,
  <ProfessionalInformation company={profInfo.company} position={profInfo.position} responsibilities={profInfo.responsibilities} yearWorkedFrom={profInfo.yearWorkedFrom} yearWorkedTo={profInfo.yearWorkedTo} onNext={nextHandler} onSave={changeInfoHandlerHandler}/>,
  <Confirmation genInfo={genInfo} educInfo={educInfo} profInfo={profInfo} onEdit={editHandler} />
  ];

  function nextHandler(e){
    pageIndex !== pages.length - 1 ? setPageIndex(pageIndex + 1) : setPageIndex(0);
    changeInfoHandlerHandler(e);
  }

  function editHandler(){
    setPageIndex(1);
  }

  function changeInfoHandlerHandler(e){
    console.log(e.target.previousSibling.email);
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
          graduateYear: info.graduateYear.value 
        })
      break;
      case 'profinfo':
        console.log('professional information');
        setProfInfo( {
          ...profInfo,
          company: info.company.value,
          position: info.position.value,
          responsibilities: info.responsibilities.value,
          yearWorkedFrom: info.yearWorkedFrom.value,
          yearWorkedTo: info.yearWorkedTo.value,
        });
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
