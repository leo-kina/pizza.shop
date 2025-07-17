import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Toaster } from 'sonner'

import { router} from './AppRoutes'
export function App() {


  return (
    <>

<RouterProvider router={router}/>
    <Toaster richColors/>
</>
  )
}

export default App
