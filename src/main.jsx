import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Learning1 from './components/takeaways/Learning1.jsx'
import Learning2 from './components/takeaways/Learning2.jsx'
import Learning3 from './components/takeaways/Learning3.jsx'
import Learning4 from './components/takeaways/Learning4.jsx'
import Learning5 from './components/takeaways/Learning5.jsx'
import Learning6 from './components/takeaways/Learning6.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="" element={<App/>} />
      <Route path='learning1' element={<Learning1/>} />
      <Route path='learning2' element={<Learning2/>} />
      <Route path='learning3' element={<Learning3/>} />
      <Route path='learning4' element={<Learning4/>} />
      <Route path='learning5' element={<Learning5/>} />
      <Route path='learning6' element={<Learning6/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
