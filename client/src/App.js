
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import UsersPage from './components/getUser/UsersPage';
import Add from './components/addUser/Add';
import Update from './components/UpdateUser/Update';

function App() {

  const route = createBrowserRouter([
    {
      path:'/',
      element:<UsersPage/>
    },
    {
      path:'/add',
      element:<Add/>
    },
    {
      path:'/update',
      element:<Update/>
    },
    
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
