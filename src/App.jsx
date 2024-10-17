import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./AppLayout"
import LandingPage from "./Pages/LandingPage"
import Redirectlink from "./Redirectlink"

 const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [
      {
        path :'/',
        element : <LandingPage/>
      },
      {
        path : '/:id',
        element : <Redirectlink/>
      }
    ]
  }
 ])
function App() {
 
  return (
    
     <RouterProvider router={router} />
    
  )
}

export default App
