import './Log.css'

const Log = ()=> {
   
   
   
    return(

<div className="login">
      <h1>로그인</h1>
    <div className="lg">
      <input type="text"  placeholder="아이디" />
    </div>
    <div className="lg">
      <input type="password"  placeholder="비밀번호" />
    </div>
    <div>
      <button type="button"  >로그인</button>
    </div>
</div>


    );
}

export default Log;