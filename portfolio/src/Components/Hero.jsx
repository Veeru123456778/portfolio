// import React from "react";
// import { styles } from "../styles";
// import TypingEffect from "./TypingEffect";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen`}>
//       <div className={`absolute inset-0 top-[120px] max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#1e42f7]' />
//           <div className='w-1 h-32 bg-gradient-to-b from-blue-500 to-blue-900 shadow-lg' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-blue-200`}>
//             Hi, I'm <span className='text-white'>Varun</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I am a{" "}
//             <TypingEffect/>

//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { styles } from "../styles";
// import TypingEffect from "./TypingEffect";
// import front from "../assets/front.webp"

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen`}>
//       <div className={`absolute inset-0 top-[120px] max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}>

//       <div className='flex items-center'>
//           <img src={front} alt="Description" className="w-1/2 h-auto" /> {/* Adjust width and height as needed */}
//         </div>

//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#1e42f7]' />
//           <div className='w-1 h-32 bg-gradient-to-b from-blue-500 to-blue-900 shadow-lg' />
//         </div>

//         <div className='flex flex-col '>
//           <h1 className={`${styles.heroHeadText} text-blue-200`}>
//             Hi, I'm <span className='text-white'>Varun</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I am a{" "}
//             <TypingEffect />
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { styles } from "../styles";
import TypingEffect from "./TypingEffect";
import front from "../assets/front.webp";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Import download icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section className={`relative w-full h-[80vh] sm:h-screen`}>
      <div
        className={`absolute sm:inset-0 max-w-7xl ${styles.paddingX} flex flex-col-reverse sm:flex-row  gap-10 items-center`}
      >
        {" "}
        {/* Reduce gap size */}
        <div className="flex items-center w-4/5 sm:w-2/5">
          <img src={front} alt="Description" className="w-[90%] h-auto" />{" "}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText} text-blue-200`}>
              Hi, I'm <span className="bg-gradient-to-r from-cyan to-blue  bg-clip-text text-transparent">Varun</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a <TypingEffect />
            </p>
          </div>
          <div className="flex flex-start mt-5">
            <a
              href="https://drive.google.com/file/d/1TgIitUv51OMVIKBmsPK61yQEB-rNdrcp/view?usp=sharing" // Path to your resume in the public folder
              download="Varun_Resume.pdf"
              className="mt-5 px-2 py-1 sm:px-3 sm:py-2  rounded-md text-md sm:text-lg text-white border-2"
            >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
