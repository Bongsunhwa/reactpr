import './Log.css'

const Log = ()=> {
    
   
   
    return(


      <div id='Log'>
        
        <h1 className='Log'>로그인</h1>
        
        <div>
        <input className='id' type='text' placeholder='아이디'/>
        <input className='pw' type='password' placeholder='비밀번호'/>
        
        <input type='submit'/>
        </div>
        

      
    </div>

    );
}

export default Log;