import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organizms/header';
import { EditModalWindow } from './components/organizms/editModal';

const App = () =>
<>
    <Header />
    <div className='App--container__page'>
        <Outlet />
        <EditModalWindow />
    </div>
</>

export default App;
