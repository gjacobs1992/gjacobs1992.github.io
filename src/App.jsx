import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import TicTacToePage from "./pages/TicTacToePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/tic-tac-toe" element={<TicTacToePage />} />
      </Route>
    </Routes>
  );
}
