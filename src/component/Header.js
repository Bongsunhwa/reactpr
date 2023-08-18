import '../pages/Main.css';
import '../App.css';
import { Link } from "react-router-dom";



const Header = () =>{


  // const [language,setLanguage] =useState(false);


    return (
        <div className="header">
          <div className="header_top">
            <Link to ="/log" style={{textDecoration:"none"}}>로그인 </Link>
            <Link to ="/new" style={{textDecoration:"none"}}>회원가입 </Link>
            <img src="" className="language" alt="logo" />
          </div>
          <nav className="header_nav">
            <ul>
            <Link to ="/" ><img src="" alt="logo" className="nav_logo"></img></Link>
            <Link to ="/ticket" ><li>항공권 예매</li> </Link>
            <Link to ="/service" ><li>부가서비스</li></Link>
            <Link to ="/mobail" ><li>모바일탑승권</li></Link>
            </ul>
         </nav>
        </div>
        
    );
}

export default Header;
