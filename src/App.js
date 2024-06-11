import EditGokarts from './components/GokartEditsPanel/editGokarts.js';
import EventCreation from './components/eventCreation/eventCreation.js';
import EventsPage from './components/eventsPage/eventsPage';
import LoginPage from './components/loginPage/login.js';
import EditPage from './components/mainEditPanel/editPanel.js';
import ViewPage from './components/mainViewPanel/viewPanel.js';
import RaceStats from './components/raceStats/raceStats.js';
import RegisterPage from './components/registerPage/register';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import FinishedStint from './components/stintEnd/stintEnd.js';


function App() {
  const router = createBrowserRouter([
    {path: '/',
    children: [
      {path: '/', element: <LoginPage/>},
      {path: '/main', element: <EventsPage/>},
      {path: '/edit', element: <EditPage/>},
      {path: '/view', element: <ViewPage/>},
      {path: '/create', element: <EventCreation/>},
      {path: '/gokarts', element: <EditGokarts/>},
      {path: '/stats', element: <RaceStats/>},
      {path: '/stint', element: <FinishedStint/>},
    ]},
    {path: '/login',
    children: [
      {path: '/login', element: <LoginPage/>}
    ]},
    {path: '/Register',
      children: [
        {path: '/Register', element: <RegisterPage/>}
    ]},
  ])
  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
