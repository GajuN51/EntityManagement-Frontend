import {
    LayoutDashboard,
    Menu,
    X,
    List,
  } from "lucide-react";
  import { Link ,useLocation } from '@tanstack/react-router';
  
  const Sidebar = ({
    isSidebarOpen,
    toggleSidebar,
  }: {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
  }) => {
    const location = useLocation();
  
    return (
      <div
        className={`h-screen bg-white shadow-lg flex flex-col fixed left-0 top-0 border-r border-gray-200 transition-all duration-300 z-50 
          ${isSidebarOpen ? "w-56" : "w-16 md:w-64"}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <h3 className="text-3xl text-blue font-bold hidden md:block">Mobility</h3>
          <button onClick={toggleSidebar} className="text-gray-500 md:hidden">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Navigation Items */}
        <nav className="mt-10 flex flex-col space-y-1 px-2">
          <NavItem
            icon={LayoutDashboard}
            text="Entity Management"
            link="/"
            isSidebarOpen={isSidebarOpen}
            active={location.pathname === "/"}
          />
          <NavItem
            icon={List}
            text="Web Service Operations"  
            link="/web-services"
            isSidebarOpen={isSidebarOpen}
            active={location.pathname === "/web-services"}
          />
          
        </nav>
      </div>
    );
  };
  
  const NavItem = ({
    icon: Icon,
    text,
    link,
    active,
    badge,
    isSidebarOpen,
  }: any) => (
    <Link
      to={link}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium relative transition-all duration-300 
        ${
          active
            ? "bg-indigo-100 text-indigo-900"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      <Icon size={22} className={active ? "text-indigo-900" : "text-gray-500"} />
  
      {/* Show Text Only If Sidebar is Open */}
      <span
        className={`truncate transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        {text}
      </span>
  
      {badge && (
        <span className="absolute right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
  
  export default Sidebar;
  