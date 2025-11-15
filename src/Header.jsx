import React from 'react';
import AnimatedCircles from './AnimatedCircles';
import Profile from './assets/profile-hanant.jpg'
import Typewriter from "typewriter-effect";

// --- 1. รับ 'theme' prop ตรงนี้ ---
function Header({ theme }) {
  return (
    <header 
      className={`
        relative w-full 
        h-screen  
        flex items-center justify-center 
        overflow-hidden 
        transition-colors duration-300
        p-4       /* 2. เพิ่ม padding รอบนอก กันการ์ดชนขอบจอมือถือ */
      `}
    >
      {/* --- 3. ส่ง 'theme' ต่อลงไป --- */}
      <AnimatedCircles theme={theme} />

      {/* การ์ดข้อความ */}
      <div 
        className={`
          relative z-10 text-center items-center justify-center
          rounded-lg shadow-xl
          
          /* 3. นี่คือจุดที่สำคัญที่สุด (การ์ด Responsive) */
          w-full              /* ค่าเริ่มต้น: กว้างเต็มจอ (สำหรับมือถือ) */
          max-w-sm            /* บนมือถือ: จำกัดความกว้างสูงสุดไว้ที่ 384px (sm) */
          md:max-w-xl         /* บนจอ md (tablet): กว้างสุด 576px (xl) (ใกล้เคียง 600px เดิม) */
          lg:max-w-2xl        /* บนจอ lg (desktop): กว้างสุด 672px (2xl) */

          p-6 md:p-10         /* 4. ใช้ padding ที่ responsive (p-15 ไม่มีใน Tailwind) */
          
          backdrop-blur-sm
          transition-colors duration-300
        `}
      >
            <img 
              src={Profile} 
              alt="Profile Hanan" /* 5. เพิ่ม alt text เพื่อ Accessibility */ 
              className=' relative rounded-full h-28 w-28 md:h-32 md:w-32 mx-auto object-cover mb-3'
            />
            <h2 className=' mb-5 text-lg md:text-xl'>CS student</h2>
            
            {/* 6. ปรับขนาด Font ให้ Responsive และเพิ่ม min-h กัน Layout กระตุก */}
            <div className=' text-2xl md:text-3xl font-medium min-h-[50px] sm:min-h-[60px] md:min-h-0'>
              <Typewriter 
                options={{
                  strings: ["Hi, the name's Hanant 👋"
                            ,"I like Matcha 🍵"
                            , "I like to code.py 🐍"
                            , "Cat Servant 🐈‍⬛"
                            , "CTO of Zibal 🚀"
                            ,"Trust The Process!"
                            ,"Gym Rat 💪"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>

            {/* 7. เพิ่ม flex-wrap ให้เมนู (เผื่อขึ้นบรรทัดใหม่บนจอมือถือ) */}
            <ul className=' flex flex-2 flex-wrap gap-x-4 gap-y-2 mt-5 justify-center'>
                <li><a href="#About">About</a></li> {/* 8. แก้คำผิด "Aboute" */}
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Skill">Skills</a></li>
                <li><a href="#Projects">Project</a></li>
            </ul>
      </div>
    </header>
  );
}

export default Header;