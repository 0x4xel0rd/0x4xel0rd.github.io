import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import ProjectDetail from "../pages/Projects/ProjectDetail";

import Terminal from "../terminal/Terminal";

function AppRouter() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/hobbies" />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
