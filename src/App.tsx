import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Toaster } from 'sonner'
import {ThemeProvider} from './components/theme/theme-provider'
import { router} from './AppRoutes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
export function App() {


  return (
    <>
<ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
  <QueryClientProvider client={queryClient}>
<RouterProvider router={router}/>
</QueryClientProvider>
    <Toaster richColors/>
    </ThemeProvider>
</>
  )
}

export default App
