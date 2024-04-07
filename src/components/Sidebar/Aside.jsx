import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <div className="w-[270px] h-full bg-[#fff3f3] p-[20px]">
      <div className="flex flex-col gap-[5px] aside">
        <NavLink to={"/"} className="px-[10px] py-[12px] rounded-[8px]">
          Products
        </NavLink>
        <NavLink to={"/add"} className="px-[10px] py-[12px] rounded-[8px]">
          Add product
        </NavLink>
      </div>
    </div>
  );
};

export default Aside;
