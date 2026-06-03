import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";

// Import your newly refactored project components
import FileCloud from "./projects/FileCloud";
import MembersOnly from "./projects/MembersOnly";
import Blog from "./projects/Blog";
import Waldo from "./projects/waldo";
import MessagingApp from "./projects/MessagingApp"; // <-- New import for MessagingApp case study

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
        /* --- ADDED CASE STUDY ROUTES BELOW --- */
        {
          path: "projects/filecloud",
          element: <FileCloud />,
        },
        {
          path: "projects/membersonly",
          element: <MembersOnly />,
        },
        {
          path: "projects/blog",
          element: <Blog />,
        },
        {
          path: "projects/waldo",
          element: <Waldo />,
        },
        {
          path: "projects/messaging-app",
          element: <MessagingApp />,
        },
        /* ------------------------------------ */
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
