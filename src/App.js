import EditGokarts from './components/GokartEditsPanel/editGokarts.js';
import EventCreation from './components/eventCreation/eventCreation.js';
import EventsPage from './components/eventsPage/eventsPage';
import LoginPage from './components/loginPage/Login.js';
import EditPage from './components/mainEditPanel/editPage.js';
import ViewPage from './components/mainViewPanel/viewPanel.js';
import RegisterPage from './components/registerPage/register';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import FinishedStint from './components/stintEnd/stintEnd.js';
import MainPage from './components/MainPage/MainPage.js';
const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  if (!token) {
      return <Navigate to="/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {path: '/',
  children: [
    {path: '/', element: <MainPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/Register', element: <RegisterPage/>},
    {path: '/main', element: <ProtectedRoute> <EventsPage/> </ProtectedRoute>  },
    {path: '/edit', element: <ProtectedRoute> <EditPage/> </ProtectedRoute>   },
    {path: '/view', element: <ProtectedRoute> <ViewPage/> </ProtectedRoute> },
    {path: '/create', element: <ProtectedRoute> <EventCreation/></ProtectedRoute> },
    {path: '/gokarts', element: <ProtectedRoute> <EditGokarts/></ProtectedRoute> },
    {path: '/stint', element: <ProtectedRoute> <FinishedStint/> </ProtectedRoute>},
  ]},
])

function App() {

  return (

      <RouterProvider router={router} />
    
  );
}

export default App;
