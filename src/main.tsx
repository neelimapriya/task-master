import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route.tsx';
import { ThemeProvider } from './providers/theme-providers.tsx';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
   <Provider store={store}>
   <RouterProvider router={routes}/>
    </Provider>
    </ThemeProvider>
 
  </StrictMode>,
)
