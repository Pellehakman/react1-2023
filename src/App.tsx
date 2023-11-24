// import "./index.css";
import { Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import LoginView from "./views/loginView/LoginView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </>
  );
}

export default App;
