
import './App.css'
import Banner from './components/Banner/Banner'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import GetSolutions from './components/GetSolutions/GetSolutions'
import Header from './components/Header/Header'
import Service from './components/Service/Service'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  

  return (
    <>
      <div className='max-w-[1160px] mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <GetSolutions></GetSolutions>
      <Service></Service>
      <Testimonial></Testimonial>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      </div>
    </>
  )
}

export default App
