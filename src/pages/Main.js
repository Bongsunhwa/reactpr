

import Event from "../component/Event";
import Footer from "../component/Footer";
import Quick from "../component/Quick";
import './Main.css'




const Main = ()=> {

    return(
        
        <>
        <Quick />
        <div className="main">
         <Event />
         </div>
         <Footer />
         </>

    );
}

export default Main;