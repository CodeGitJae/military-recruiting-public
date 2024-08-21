import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import 'normalize.css';

import routes from './routes/Routes';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={createBrowserRouter(routes)}/>
    </StrictMode>,
);
