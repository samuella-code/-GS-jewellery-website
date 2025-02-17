import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Navbar from './Components/general/Navbar'
import Footer from './Components/general/Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer/>
  </BrowserRouter>
)
