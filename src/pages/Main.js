
import Guide from "../component/Guide";
import Quick from "../component/Quick";
import Event from "../component/Event";

import './Main.css'



const Main=() =>{

    return (

            <div className="main">
            <Quick />
            <div className="rayout">
                이미지들어갈거
            <for name ="img_btn">
                <input type="radio" value={0} src="#" />
               
            </for>
            </div>
            <Guide />
{/*           
                <Refslide /> */}
            </div>
            
        

    );
}

export default Main;