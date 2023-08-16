import { useEffect, useState } from "react"

function Banner () {
   const [showPopup , setShowPopup]= useState(true);
   
   const closePopup =(expireDays) => {
      let expire = new Date();
      expire.setTime(expire.getTime() +(expireDays* 24 *60 *60 *1000));
      localStorage.setItem("popupNoShow",expire.getTime());
   }
   const checkPopupClose =() =>{
      let expireDay =localStorage.getItem("popupNoShow");
      let today =new Date();

      if(today.getTime()>expireDay ){
      return false;
   } else{
     return true;
   }
}

   function closePopupToday() {
      closePopup(1);
      setShowPopup(false);
   }
useEffect (()=>{
   checkPopupClose() ? setShowPopup(false) : setShowPopup(true);
}, []);

return(
   <>
   {showPopup &&(
      <>
      <div className="popup">
         <div className="popup_close_wrap">
            <div className="popup_noshow" 
            onClick={closePopupToday}>
               <input type ='checkbox' id='check' />
               <label htmlFor="check" >오늘 하루 안 보기</label>
            </div>
            <div className="popup_close"
            onClick={() => setShowPopup(false)}>
               <span>닫기</span>
            </div>
         </div>
      </div>
   </>
   )}
   
   
   
   </>
)

   }








export default Banner;