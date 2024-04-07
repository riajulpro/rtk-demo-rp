import { Outlet } from "react-router-dom";
import Aside from "./components/Sidebar/Aside";

const MainLayout = () => {
  return (
    <div className="w-scren h-screen flex items-start justify-start">
      <Aside />
      <div className="w-[calc(100%-270px)] h-full px-[20px] py-[30px] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
