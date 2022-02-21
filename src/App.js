import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { UsersPage } from "./pages/UsersPage";
import { UserPage } from "./pages/UserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./components/NavBar";
import { DashBoard } from "./pages/DashBoard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />

        <Route path="/dashboard/*" element={<DashBoard />}>
          {/* todo lo que esté dentro será renderizado por medio de <Outlet/> */}
          <Route path="welcome" element={<p>Welcome!!</p>} />
          <Route path="goodbye" element={<p>Say goodbye!!</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
