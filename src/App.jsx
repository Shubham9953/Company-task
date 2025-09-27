import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import ContactForm from './components/Contactform'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <Cards/>
     <ContactForm/>
    <Footer/>
   

    </div>
  )
}

export default App
