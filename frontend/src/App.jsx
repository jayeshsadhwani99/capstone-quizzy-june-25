import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import TeacherTemplatesPage from "./pages/teacher/templates";
import CreateTemplatePage from "./pages/teacher/templates/create";
import NotFoundPage from "./pages/404";
import TeacherAssesmentsPage from "./pages/teacher/assesments";
import CreateAssesmentPage from "./pages/teacher/assesments/create";
import StudentLayout from "./components/Student/Layout";
import StudentDashboard from "./pages/student/dashboard";
import StudentAssesmentsPage from "./pages/student/assesments";
import TakeAssesmentPage from "./pages/student/assesments/take";

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
            <Route
              path="/teacher/templates/create"
              element={<CreateTemplatePage />}
            />
            <Route
              path="/teacher/templates/:id"
              element={<CreateTemplatePage />}
            />
            <Route
              path="/teacher/assesments"
              element={<TeacherAssesmentsPage />}
            />
            <Route
              path="/teacher/assesments/create"
              element={<CreateAssesmentPage />}
            />
            <Route
              path="/teacher/assesments/:id"
              element={<CreateAssesmentPage />}
            />
          </Route>

          <Route element={<StudentLayout />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route
              path="/student/assesments"
              element={<StudentAssesmentsPage />}
            />
            <Route
              path="/student/assesments/:id"
              element={<TakeAssesmentPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
