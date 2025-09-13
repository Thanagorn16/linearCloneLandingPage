import './index.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Customer from './components/Customer.jsx'
import Purpose from './components/Purpose.jsx'
import Planning from './components/Planning.jsx'
import Tracking from './components/Tracking.jsx'
import AIAssistance from './components/AIAissistComponents/AIAssistance.jsx'
import CollabPage from './components/CollabComponent/CollabPage.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Customer/>
      <Purpose/>
      <Planning/>
      <Tracking/>
      <AIAssistance/>
      <CollabPage/>
    </>
  )
}

export default App
