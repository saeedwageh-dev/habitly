import { NavLink } from "react-router-dom";

function Navbar() {
  const linkCalss = ({ isActive }) => `cursor-pointer hover:text-[#3F6C51] ${isActive ? "text-[#3F6C51] font-bold" : ""}`;
  return (
    <header className="border-b border-[#2E3B31]/10 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3F6C51] font-black text-white">H</span>
          <span className="text-lg font-black tracking-tight">Habitly</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-semibold text-[#2E3B31]/60">
          <NavLink to={"/"} className={linkCalss}>
            Home
          </NavLink>
          <NavLink to={"/progress"} className={linkCalss}>
            Progress
          </NavLink>
          <NavLink to={"/about"} className={linkCalss}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
