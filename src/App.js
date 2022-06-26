import { useEffect, useState } from "react";
import AnimationNft from "./components/AnimationNft";
import GuiltyDavid from "./components/GuiltyDavid";
import MintComp from "./components/MintComp";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import poweredByLogo from './img/povered by.svg';
import GD2022 from './img/2022GuiltyDavid.png';


function App() {
  const maxWidthMobile = 700;
  const [isMobile, setISMobile] = useState(false);

  useEffect(() => {
      if(window.screen.width < maxWidthMobile){
         setISMobile(true);
         console.log("mobile");
     }
  }, [window.screen.width]);

  return (
    <div className="App"> 
      <div >
       
        <NavBar isMobile={isMobile}/>
        <div className="main">
          <div className="mainRightSide">
            <GuiltyDavid/>
            <div className="mintDesk">
              <MintComp/>
            </div>
            
          </div>
            <AnimationNft/>
          <div className="socials2">
            <MintComp/>
            <Socials/>
          </div>  

         
        </div> 
        <div className="logosDiv">
            <img src={GD2022}/>
            <img src={poweredByLogo}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
