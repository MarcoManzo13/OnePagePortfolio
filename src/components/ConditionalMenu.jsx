import HeaderButtons from "./HeaderButtons";
import Navbar from './Navbar';

function ConditionalMenu() {
    if (window.matchMedia("(max-width: 980px)").matches) {
      return <Navbar />;      
    }else {
      return <HeaderButtons />;
    }
  }
  
export default ConditionalMenu;