import { Link } from "react-router-dom";



const Header = () =>{


    return (

        <div>
             <ul>
             {/* <ul 
             style={{listStyle: 'none',
             float: 'left'}}> */}
                <li><Link to ="/">logo Home</Link></li>
                <li><Link to= "/log">로그인</Link></li>
                <li><Link to ="new">회원가입</Link></li>
                <li><button>언어선택</button></li>
            </ul>
        </div>
    );
}

export default Header;
