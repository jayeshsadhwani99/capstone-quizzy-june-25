export const studentRoutes = [
  {
    path: "/student/dashboard",
    element: () => import("../pages/student/dashboard"),
  },
  {
    path: "/student/assesments",
    element: () => import("../pages/student/assesments"),
  },
  {
    path: "/student/assesments/:id",
    element: () => import("../pages/student/assesments/take"),
  },
];
