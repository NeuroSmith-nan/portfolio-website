import Profile2 from './assets/Profile2.jpg'

export default function About() {
    return (
        // 1. ลบ h-[790px] และใช้ padding ที่ responsive (p-6 สำหรับมือถือ, p-10 สำหรับจอใหญ่ขึ้น)
        <div className="home-container w-full h-auto flex flex-col p-6 md:p-10 lg:p-16">
            
            {/* nav-home */}
            {/* 2. ลบ h-[20%] และใช้ padding (py-10) แทน */}
            <div id="About" className="flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-widest">A B O U T</h1>
            </div>

            {/* downstare */}
            {/* 3. นี่คือจุดสำคัญ:
                - flex-col (เรียงแนวตั้ง) เป็นค่าเริ่มต้นสำหรับจอมือถือ
                - md:flex-row (เรียงแนวนอน) สำหรับจอขนาด md (768px) ขึ้นไป
                - items-center (จัดกลางแนวตั้ง/แนวนอน ขึ้นอยู่กับ flex-direction)
                - gap-8 md:gap-12 (เพิ่มช่องว่างระหว่างรูปกับข้อความ)
            */}
            <div className="w-full h-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                
                {/* left (Image) */}
                {/* 4. กำหนด w-full (เต็มจอ) สำหรับมือถือ และ md:w-1/3 สำหรับจอใหญ่ */}
                <div className="flex w-full md:w-1/3 justify-center items-center">
                    <img 
                        // 5. ควบคุมขนาดรูปไม่ให้เล็ก/ใหญ่ไป
                        // w-64 (กว้าง 16rem) บนมือถือ, md:w-full (เต็ม 1/3 ของ container)
                        className='w-64 md:w-full max-w-sm rounded-2xl shadow-xl shadow-gray-200/20' 
                        src={Profile2} 
                        alt="Profile Hanan" // 6. เพิ่ม alt text เพื่อ accessibility
                    />
                </div>

                {/* right (Text) */}
                {/* 7. w-full บนมือถือ และ md:w-2/3 บนจอใหญ่ */}
                {/* 8. text-center (จัดกลาง) บนมือถือ, md:text-left (ชิดซ้าย) บนจอใหญ่ */}
                <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                    
                    {/* 9. ปรับขนาด heading ให้ responsive */}
                    <h3 className='text-3xl md:text-4xl mb-5 font-medium'>My <span className='underline decoration-cyan-700'>little</span> journey</h3>
                    
                    {/* 10. ปรับขนาด font ให้เป็น mobile-first (text-base คือ 16px) และใหญ่ขึ้นบนจอ md/lg */}
                    {/* ใช้ <br/><br/> หรือ <p> หลายๆ อัน เพื่อให้ย่อหน้าทำงานถูกต้อง */}
                    <p className='text-base md:text-lg lg:text-xl mb-2'>
                        Hi, I’m Hanant 👋
                        <br/><br/>
                        Everything started from a small curiosity I had as a kid — questions like “How do these technologies work?” and “Who creates them?”
                        <br/><br/>
                        From the day I wrote my first Hello World to the moment I began fine-tuning AI models — some successful, some overfitted — every step has been a meaningful part of my learning path.
                        Creating something that makes a positive impact, no matter how small, reminds me why I love what I do.
                        <br/><br/>
                        I’m truly grateful to be walking this path in technology — one that challenges me, inspires me, and helps me grow every day. 🌱
                    </p>
                    <div id="About" className="flex w-full py-2 md:py-4 items-center justify-center">
                        <a href="/public/Hanant_Resume.pdf" download className="btn text-base md:text-lg lg:text-xl border rounded-2xl hover:text-orange-700 p-3 md:p-5 lg:p-6 ">
                            Download Resume<span className=' text-red-600'>!</span>
                        </a>    
                    </div>           
                </div>
            </div>

        </div>
    );
}