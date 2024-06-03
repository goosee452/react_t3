import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} from './components/counter.jsx'
import { Toggle } from './components/toggle.jsx'
import { Ifield } from './components/inputField'

function App() {
  let counter = new Counter;
  let toggle = new Toggle;
  let ifield = new Ifield
  return (
    <>
      <counter.render></counter.render>
      <hr />
      <toggle.render></toggle.render>
      <hr />
      <ifield.render></ifield.render>
      <hr />
    </>
  )
}

export default App
