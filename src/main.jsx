import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBar, PictureComparison, Services, Welcome } from './index'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Welcome/>
    <Services/>
    <PictureComparison/>
  </StrictMode>,
)
