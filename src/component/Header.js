import { Link } from "react-router-dom";



const Header = () =>{


    return (
        <div>
        
            <div>
            <Link to ="/log">로그인</Link>
            <Link to ="/new">회원가입</Link>
            <button>언어선택</button>
            </div>
        <nav>
            <Link to ="/">home logo</Link>
            <Link to ="/ticket">항공권 예매</Link>
            <Link to ="/service">부가서비스</Link>
            <Link to ="/mobail">모바일 탑승권</Link>
                   
        </nav>
               
        </div>
        
    );
}

export default Header;
