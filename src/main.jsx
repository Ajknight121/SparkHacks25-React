import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout.jsx'

import { SiteContextProvider } from './SiteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<App />}/>
            <Route path="/next" element={"New Page"}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteContextProvider>
  </StrictMode>,
)
