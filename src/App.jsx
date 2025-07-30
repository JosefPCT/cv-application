import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { GeneralInformation } from './components/GeneralInformation'

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [genInfo, setGenInfo] = useState({name: "Steve", email: null, contactNumber: null});

  const pages = [
  <Home onSubmit={nextHandler} />, 
  <GeneralInformation name={genInfo.name} email={genInfo.email} contactNumber={genInfo.contactNumber} onSubmit={nextHandler} isEditable={true} submitHandler={changeGeneralInfoHandler}/>
   ];

  function nextHandler(){
    pageIndex !== pages.length - 1 ? setPageIndex(pageIndex + 1) : setPageIndex(0);
  }

  function changeGeneralInfoHandler(e){
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value)
    console.log(e.target.contactNumber.value);
    setGenInfo({...genInfo, name: e.target.name.value, email: e.target.email.value, contactNumber: e.target.contactNumber.value})
  }

  return (
    <>
      {/* <HelloWorld />
      <Home />
      <GeneralInformation /> */}
      {pages[pageIndex]}
    </>
  )
}

export default App
