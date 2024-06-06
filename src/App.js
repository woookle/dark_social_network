import React from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

const App = () => {
  return (
    <section className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <React.Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </React.Suspense>
      </div>
      <img
        src="https://wallpaper-house.com/data/out/10/wallpaper2you_421653.jpg"
        className="background"
      />
    </section>
  );
};

export default App;
