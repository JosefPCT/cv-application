import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Home } from './components/Home'
import { GeneralInformation } from './components/GeneralInformation'

function App() {
  const [count, setCount] = useState(0)
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [<Home onSubmit={nextHandler} />, <GeneralInformation onSubmit={nextHandler}/>]

  function nextHandler(){
    pageIndex !== pages.length - 1 ? setPageIndex(pageIndex + 1) : setPageIndex(0);
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
