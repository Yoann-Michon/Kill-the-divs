import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Connexion from './routes/Connexion'
import Home from './routes/Home'
import Password from './routes/Password'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/password',
    element: <Password />,
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
