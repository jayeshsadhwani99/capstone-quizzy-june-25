import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import TeacherTemplatesPage from "./pages/teacher/templates";

const Home = lazy(() => import("./pages/index"));
const TeacherDashboard = lazy(() => import("./pages/teacher/dashboard"));
const TeacherLayout = lazy(() => import("./components/Teacher/Layout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<TeacherLayout />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route
              path="/teacher/templates"
              element={<TeacherTemplatesPage />}
            />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
