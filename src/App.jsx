import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Experience from './pages/Experience'
import PlaceToStay from './pages/PlaceToStay'
import Accommodations from './pages/Accommodations'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="/accommodations" element={<Accommodations />} />
      </Routes>
    </Layout>
  )
}

export default App
