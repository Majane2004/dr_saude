import './App.css'
import Dashboard from './Dashboard'
/* reaproveitando a estrutura */
import { Outlet } from 'react-router-dom'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
      <Outlet/>
    </>
  )
}

export default App
