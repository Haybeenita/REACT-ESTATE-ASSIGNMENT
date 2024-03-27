import './App.css'
import Hero from './components/Hero'
import Latestproperties from './components/Latestproperties'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { TrustedBy } from './components/TrustedBy'
import { WhoWeAre } from './components/WhoWeAre'
import Neighbours from './components/Neighbours'
import Team from './components/Team'
import {Customers} from './components/Customers'
import Footer from './components/Footer'
// import { Blog } from './components/blogs'


function App() {


  return (
    <>
      <header>
        <Navbar/>
      </header> 

      <main className='bg-white'>
        <Hero/>
        <TrustedBy/>
        <WhoWeAre/>
         <Latestproperties/> 
         <Services/>
        <Neighbours/>
        <Team/>
       {/* <Blog/> */}
        <Customers/>
        <Footer/> 
       
      </main>
    </>
  )
}

export default App
