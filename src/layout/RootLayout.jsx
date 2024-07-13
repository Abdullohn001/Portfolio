import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar"

function RootLayout() {
  return (
    <div className="relative">
      <main className="bg-img w-[1800px] ml-9  h-[950px]">
        <Navbar />
        <Outlet />
        
      </main>
    </div>
  );
}

export default RootLayout;
