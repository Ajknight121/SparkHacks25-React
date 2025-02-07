import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Layout from './Layout.jsx'

import { SiteContextProvider } from './SiteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<App />}/>
            <Route path="/next" element={<div>This second page can be another React component<br/> <Link to="/">Return to todo list</Link></div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteContextProvider>
  </StrictMode>,
)
