import "./Header.css";
import { useScreenSize } from "../../../context/ScreenSizeContext/ScreenSizeProvider";

function Header() {
  const { isMobile } = useScreenSize();

  return (
    <section className={`Header${isMobile ? " Mobile" : ""}`}>Header</section>
  );
}

export default Header;
