// import { useEffect, useRef, useState } from "react";

// const Refslide =() => {
//   const ref= useRef (null);
//   const [imgOrder, setImgOder] =useState (0);
//   const IMG_WIDTH = 100;
//   const RefSlides = imgOrder + IMG_WIDTH;
//   useEffect(()=>{
//     ref.current.style.transition="all 0.5s ease-in-out";
//     ref.current.style.treansform=`translataX(-${RefSlides}px)`;
//   },[imgOrder]);



//   const moveNextSlide =() =>{
//     if(imgOrder ===2) return;
//     setImgOder(imgOrder +1);
//   };
//     const movePrevSlide =() =>{
//       if(imgOrder ===0 ) return;
//       setImgOder(imgOrder-1);
//     };
  


//   return(
//     <>
//     <div>
//       <div  >
//         <img src="" alt="lmg"/>
//         <img src="" alt="lmg"/>
//         <img src="" alt="lmg"/>

//       </div>
//       </div>
//       <button onClick={movePrevSlide}>prev</button>
//       <button onClick={moveNextSlide}>next</button>
      
//     </>
    

//   );

// }

// export default Refslide ;