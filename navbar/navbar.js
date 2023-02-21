import Logo from "./navbarComponents/logo";
import Menu from "./navbarComponents/menu";
import Mobilemenu from "./navbarComponents/mobilemenu";
import Search from "./navbarComponents/search";
import SignInUp from "./navbarComponents/signinup";

const MenuNav = [
  { name: "Home", href: "#", current: true },
  { name: "About us", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];

function classNameMenu(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full px-5 py-5 sm:px-20 sm:py-5 border-b-2 border-[#FED85C]">
        <div className="relative">
          <div className="flex justify-between items-center">
            <Logo />
            <Menu menu={MenuNav} classNameMenu={classNameMenu} />
            <div className="relative lg:static flex gap-4 lg:gap-10 items-center">
              <Search />
              <SignInUp />
            </div>
          </div>
          <Mobilemenu menu={MenuNav} classNameMenu={classNameMenu} />
        </div>
      </div>
    </>
  );
}
