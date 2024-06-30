import EditGokarts from './components/GokartEditsPanel/editGokarts.js';
import EventCreation from './components/eventCreation/eventCreation.js';
import EventsPage from './components/eventsPage/eventsPage';
import LoginPage from './components/loginPage/Login.js';
import EditPage from './components/mainEditPanel/editPage.js';
import ViewPage from './components/mainViewPanel/viewPanel.js';
import RaceStats from './components/raceStats/raceStats.js';
import RegisterPage from './components/registerPage/register';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import FinishedStint from './components/stintEnd/stintEnd.js';
import MainPage from './components/MainPage/MainPage.js';
import AuthProvider from 'react-auth-kit';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import createStore from 'react-auth-kit/createStore';

const router = createBrowserRouter([
  {path: '/',
  children: [
    {path: '/', element: <MainPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/Register', element: <RegisterPage/>},
    {path: '/main', element:<AuthOutlet fallbackPath='/login' > <EventsPage/> </AuthOutlet>},
    {path: '/edit', element:<AuthOutlet fallbackPath='/login' > <EditPage/> </AuthOutlet> },
    {path: '/view', element:<AuthOutlet fallbackPath='/login' > <ViewPage/> </AuthOutlet> },
    {path: '/create', element:<AuthOutlet fallbackPath='/login' > <EventCreation/> </AuthOutlet>},
    {path: '/gokarts', element:<AuthOutlet fallbackPath='/login' > <EditGokarts/> </AuthOutlet>},
    {path: '/stats', element:<AuthOutlet fallbackPath='/login' ><RaceStats/> </AuthOutlet> },
    {path: '/stint', element:<AuthOutlet fallbackPath='/login' > <FinishedStint/> </AuthOutlet>},
  ]},
])

function App() {
  const store = createStore({
    authType: 'cookie', 
    authName: '_auth', 
    cookieDomain: window.location.hostname, 
    cookieSecure: false 
  });
  return (
    <AuthProvider store={store}>
      <RouterProvider router={router} />
    </AuthProvider>
    
  );
}

export default App;
