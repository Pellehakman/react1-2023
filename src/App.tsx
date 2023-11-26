// import "./index.css";
import { Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import LoginView from "./views/loginView/LoginView";
import SiteNav from "./components/Nav/siteNav/siteNav";

function App() {
  return (
    <>
    <SiteNav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </>
  );
}

export default App;
