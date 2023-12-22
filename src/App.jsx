import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Layout/Header";
("aos");
// Import Swiper styles
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-inter">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
