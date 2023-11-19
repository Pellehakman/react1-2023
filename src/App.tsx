import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginView from "./views/loginView/loginView";
import HomeView from "./views/HomeView/HomeView";

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
  