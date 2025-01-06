import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route.tsx';
import { ThemeProvider } from './providers/theme-providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
   {/* <Provider store={undefined}> */}
   <RouterProvider router={routes}/>
    {/* </Provider> */}
    </ThemeProvider>
 
  </StrictMode>,
)
