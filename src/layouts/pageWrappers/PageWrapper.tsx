import Header from "./Header/Header";
//import { useScreenSize } from "../../context/ScreenSizeContext/ScreenSizeProvider";
import "./PageWrapper.css";

type propsPageWrapper = {
  children: JSX.Element | JSX.Element[];
};
const PageWrapper = ({ children }: propsPageWrapper) => {
  //const { isMobile } = useScreenSize();
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageWrapper;
