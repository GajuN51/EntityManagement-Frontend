import { useState } from "react";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";
import EntityManagement from "./pages/EntityManagement";
import WebServiceOperations from "./pages/WebServiceOperations";
import AddEnityManagement from "./pages/AddEnityManagement";
import AddWebservices from "./pages/AddWebservices";

// Define the root route
const rootRoute = createRootRoute({
  component: Layout,
});

// Define child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: EntityManagement,
});

const webServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/web-services",
  component: WebServiceOperations,
});

const addRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add",
  component: AddEnityManagement,
});

const addWebservices = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-webservices",
  component: AddWebservices,
});


// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  webServicesRoute,
  addRoute,
  addWebservices,
]);

// Create the router
const router = createRouter({ routeTree });

// Layout component with Sidebar and main content
function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-56" : "ml-16 md:ml-64"
        }`}
      >
        <Outlet /> {/* Renders the matched route component */}
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
