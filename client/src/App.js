import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Register from './components/Register';
import Passowrd from './components/Passowrd';
import Profile from './components/Profile';
import Username from './components/Username';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import PagenotFound from './components/PagenotFound';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Username/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/password',
    element:<Passowrd/>
  },
  {
    path:'/profile',
    element:<Profile/>

  },
  {
    path:'/reset',
    element:<Reset/>
  },
  {
    path:'/recovery',
    element:<Recovery/>
  },
  {
    path:'*',
    element:<PagenotFound/>
  }
])
function App() {
  return (
    <main>
      <RouterProvider router={router}>
      </RouterProvider>
    </main>
  );
}

export default App;
