import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Empresa from './Empresa/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Componentes/Errorpage.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/empresa",
    element:<Empresa/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
