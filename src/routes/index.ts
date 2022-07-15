import { Home } from "../pages/Home"
import { toggle } from "../utils/listeners";
import { mobileMenu } from "../utils/nodes";

export const router = () =>{
  document.body.append(...Home())

  mobileMenu().addEventListener('click',toggle);


}
