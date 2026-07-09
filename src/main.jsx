import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './Portfolio.jsx'
import OxbowProposal from './components/oxbow_Lake_hotel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oxbow-lake-hotel" element={<OxbowProposal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
