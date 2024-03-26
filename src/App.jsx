import './App.css'
import Hero from './components/Hero'
import Latestproperties from './components/Latestproperties'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { TrustedBy } from './components/TrustedBy'
import { WhoWeAre } from './components/WhoWeAre'
// import { Blog } from './components/Blogs'
import Neighbours from './components/neighbours'
// import Team from './components/team'
// import { Customers } from './components/customers'
// import Footer from './components/Footer'


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
        {/* <Team/>
        <Blog/>
        <Customers/>
        <Footer/> */}
       
      </main>
    </>
  )
}

export default App
