import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Toaster } from 'sonner'
import {ThemeProvider} from './components/theme/theme-provider'
import { router} from './AppRoutes'
export function App() {


  return (
    <>
<ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
<RouterProvider router={router}/>
    <Toaster richColors/>
    </ThemeProvider>
</>
  )
}

export default App
