import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/Main-Layout";

export const intialHabits = [
  {
    id: 1,
    emoji: "💧",
    name: "Drink 2L of water",
    streak: 5,
    doneToday: false,
  },
  { id: 2, emoji: "📖", name: "Read 10 pages", streak: 12, doneToday: false },
  { id: 3, emoji: "🧘", name: "Morning stretch", streak: 3, doneToday: false },
  { id: 4, emoji: "🚶", name: "Walk 20 minutes", streak: 8, doneToday: false },
];

export default function App() {
  const [habits, setHabits] = useState(intialHabits);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home habits={habits} setHabits={setHabits} /> },
        { path: "/progress", element: <Progress habits={habits} /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
