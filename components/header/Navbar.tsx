import MenuBox from "./MenuBox";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="py-12 flex justify-between md:justify-end gap-5 px-10 border-b-2 border-b-cardBg-alt dark:border-b-cardBg-dark">
      <MobileSidebar />
      <div className="w-1/6 xl:w-auto flex justify-end">
        <MenuBox />
      </div>
    </nav>
  );
};

export default Navbar;
