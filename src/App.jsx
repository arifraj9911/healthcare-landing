

import AppointmentBanner from './components/AppointmentBanner/AppointmentBanner'
import Banner from './components/Banner/Banner'
import ComprehensiveCare from './components/ComprehensiveCare/ComprehensiveCare'
import Footer from './components/Footer/Footer'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import GetSolutions from './components/GetSolutions/GetSolutions'
import Header from './components/Header/Header'
import Service from './components/Service/Service'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  

  return (
    <>
    <div className='bg-[#FBFBFB]'>
    <div className='max-w-[1160px] mx-auto '>
      <Header></Header>
      <Banner></Banner>
      <ComprehensiveCare></ComprehensiveCare>
      <GetSolutions></GetSolutions>
      <Service></Service>
      <Testimonial></Testimonial>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      <AppointmentBanner></AppointmentBanner>
      </div>
    </div>
      
      <Footer></Footer>
    </>
  )
}

export default App
