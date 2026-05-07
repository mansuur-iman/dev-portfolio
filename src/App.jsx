import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "notes",
          element: <Notes />,
        },
        {
          path: "notes/:slug",
          element: <NoteDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
