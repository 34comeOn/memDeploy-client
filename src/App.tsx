import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organizms/header';
import { EditModalWindow } from './components/organizms/editModal';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}
  

const App = () =>
<>
    <ScrollToTop />
    <Header />
    <div className='App--container__page'>
        <Outlet />
        <EditModalWindow />
    </div>
</>

export default App;
