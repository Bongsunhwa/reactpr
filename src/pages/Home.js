import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Navibar from "../component/Naviber";



const Home = ()=>{

    return(
        <div>
            <Banner />
            
            <Header />
            <Navibar />
            
        </div>
       

    );
}

export default Home;