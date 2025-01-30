import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import Landing from './pages/Landing.js';
import Results from './pages/Results.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SignIn />
      }, {
        path: '/signin',
        element: <SignIn />
      }, {
        path: '/signup',
        element: <SignUp />
      }, {
        path: '/landing',
        element: <Landing />
      }, {
        path: '/results',
        element: <Results />
      }
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
