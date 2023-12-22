import { useLocation } from "react-router-dom";
import HeroSlider from "../Components/Sections/HeroSlider";
import Navbar from "../Components/Sections/Navbar";

function Header() {
  const { pathname } = useLocation();
  return (
    <header className={` font-inter dark`}>
      <Navbar></Navbar>
      {pathname === "/" && <HeroSlider></HeroSlider>}
    </header>
  );
}

export default Header;
