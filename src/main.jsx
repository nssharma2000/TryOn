import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import TryLayout from './pages/try/TryLayout'
import Select from './pages/try/Select'
import Upload from "./pages/try/Upload"
import Result from "./pages/try/Result"
import Analytics from "./pages/Analytics"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/sign_in",
    Component: SignIn
  },
  {
    path: "/try",
    Component: TryLayout,
    children: [
      { index: true, Component: Select },
      { path: "upload", Component: Upload },
      { path: "result", Component: Result }
    ]
  },
  {
    path: "/analytics",
    Component: Analytics
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
