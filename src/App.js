import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <BrowserRouter>
      <section className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app_wrapper_content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <img src='https://wallpaper-house.com/data/out/10/wallpaper2you_421653.jpg' className='background' />
      </section>
    </BrowserRouter>
  );
}

export default App;
