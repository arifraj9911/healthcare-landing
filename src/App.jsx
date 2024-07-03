
import './App.css'
import Banner from './components/Banner/Banner'
import GetSolutions from './components/GetSolutions/GetSolutions'
import Header from './components/Header/Header'
import Service from './components/Service/Service'

function App() {
  

  return (
    <>
      <div className='max-w-[1160px] mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <GetSolutions></GetSolutions>
      <Service></Service>
      </div>
    </>
  )
}

export default App
