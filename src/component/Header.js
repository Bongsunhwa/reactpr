import { Link } from "react-router-dom";



const Header = () =>{


    return (
        <div className="header">
          <div className="header_top">
            <Link to ="/log" style={{textDecoration:"none"}}>로그인 </Link>
            <Link to ="/new" style={{textDecoration:"none"}}>회원가입 </Link>
           
          </div>
          <nav className="header_nav" style={{backgroundColor:"white"}} >
            <ul>
            <Link to ="/" style={{textDecoration:"none"}}><img src="" alt="logo"></img></Link>
            <Link to ="/ticket" style={{textDecoration:"none"}}>항공권예매 </Link>
            <Link to ="/service" style={{textDecoration:"none"}}>부가서비스 </Link>
            <Link to ="/mobail" style={{textDecoration:"none"}}>모바일탑승권 </Link>
            </ul>
         </nav>
        </div>
        
    );
}

export default Header;
