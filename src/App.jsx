import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import * as Sentry from '@sentry/react'
import Feature from "./components/Feature"
import HowItWork from "./components/HowItWork"
import Footer from "./components/Footer"

function App() {


  return (

<main className="bg-black">
 
 < Navbar/>
 < Hero/> 
 < Highlights/>
 <Model/>
 <Feature/>
 <HowItWork/>
 <Footer/>

</main>
    
  
  )
}

export default Sentry.withProfiler(App);
