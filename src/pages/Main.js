

import Event from "../component/Event";
import Footer from "../component/Footer";
import Quick from "../component/Quick";
import './Main.css'



const Main=() =>{

    return (

        <>
            <Quick />
            <div className="main">
            <for name ="img_btn">
                <input type="radio" value={0} src="#" />
                <input type="radio" value={1} src="#" />
                <input type="radio" value={2} src="#" />
                <input type="radio" value={3} src="#" />
                <input type="radio" value={4} src="#" />
            </for>
                <Event />
            </div>
            <Footer />
        </>

    );
}

export default Main;