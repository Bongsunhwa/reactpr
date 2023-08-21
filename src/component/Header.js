import '../pages/Main.css';
import '../App.css';
import { Link } from "react-router-dom"




const Header = () =>{





    return (
        <div className="header">
            <div id="header">
            <a href='/log' className='header_top'>로그인 </a>
            <a href='new'  className='header_top'>회원가입 </a>
            <span class="material-symbols-outlined" >
language
</span><a href='#' className='header_top' >언어선택</a>

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
