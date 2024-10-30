import './App.css'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import NotFound from './pages/not-found';
import RootLayout from './layout/root-layout';
import CategoriesPage from './pages/categories';
import SearchPage from './pages/search';

const router = createBrowserRouter([
  {
    path : '/',
    element : <RootLayout/>,
    errorElement : <NotFound/>,
    children : [
      {
        index: true,
        element: <HomePage/>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/login',
        element : <LoginPage></LoginPage>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/signup',
        element: <SignupPage/>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/search',
        element: <SearchPage/>,
        errorElement : <NotFound></NotFound>
      },
      {
        path : '/categories',
        element: <CategoriesPage/>,
        errorElement : <NotFound></NotFound>
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
