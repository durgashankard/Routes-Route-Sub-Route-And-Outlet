import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Shopping_Index } from './Shopping/Shopping_Index.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopping_Index />
  </StrictMode>,
)
