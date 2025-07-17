import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Button } from "@/components/ui/button"
import { router} from './AppRoutes'
export function App() {


  return (
<RouterProvider router={router}/>
  )
}

export default App
