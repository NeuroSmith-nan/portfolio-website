import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช

        // ⚠️ เปลี่ยนค่าตรงนี้ให้เป็นค่าของคุณจาก EmailJS
        const SERVICE_ID = 'service_oo02rds';
        const TEMPLATE_ID = 'template_pj69cmx';
        const PUBLIC_KEY = 'jpSXnb0W2QSnn4TiB';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
        })
        .then(
            () => {
                alert('✅ ส่งข้อความเรียบร้อยแล้ว!');
                e.target.reset(); // ล้างค่าในฟอร์ม
            },
            (error) => {
                console.error('FAILED...', error.text);
                alert('❌ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
            }
        );
    };

    return (
        <div className="cont-container w-full h-auto flex flex-col p-6 md:p-10 lg:p-16">
            <div id="Contact" className="flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-widest">C O N T A C T</h1>
            </div>
            <div className="w-full h-auto flex flex-col md:items-start gap-3 md:gap-5">
                <h1 className=' mx-auto text-xs md:text-2xl'>I have got just what you need, <span className=" underline ">Lets talk.</span></h1>
                
                <div className=' space-y-1 md:space-y-3 mx-auto m-8'>
                    <h2 className=' flex space-x-5 items-center justify-center text-xs md:text-2xl gap-5' >
                        <Icon icon="fluent:phone-48-regular" width="30" /> +66622039755
                    </h2>
                    <h2 className=' flex space-x-5 items-center justify-center text-xs md:text-2xl gap-5' >
                        <Icon icon="clarity:email-solid" width="30" /> hanant.devcodingai.22@gmail.com
                    </h2>
                    <h2 className=' flex space-x-5 items-center justify-center text-xs md:text-2xl gap-5' >
                        <Icon icon="line-md:map-marker-loop" width="30" />Bangkok, Thailand
                    </h2>
                </div>

                {/* เชื่อมต่อ ref และ onSubmit */}
                <form ref={form} onSubmit={sendEmail} className=' flex flex-col space-y-2 w-80 md:w-fit mx-auto'>
                    <div className=' md:flex md:space-x-2 space-y-2 md:space-y-0'>
                        {/* เพิ่ม padding (p-2) เพื่อให้พิมพ์ง่ายขึ้น และใส่ required ป้องกันค่าว่าง */}
                        <input 
                            name='user_name' 
                            type="text"  
                            required
                            placeholder='Name' 
                            className='contactInput w-80 md:w-auto rounded-2xl bg-amber-300 text-black p-7 outline-none focus:bg-amber-400 transition '
                        />
                        <input 
                            name='user_email' 
                            type="email" 
                            required
                            placeholder='Email' 
                            className='contactInput w-80 md:w-auto  rounded-2xl bg-amber-300 text-black p-7 outline-none focus:bg-amber-400 transition'
                        />
                    </div>
                    <input 
                        name='subject' 
                        type="text" 
                        required
                        placeholder='Subject' 
                        className=' rounded-2xl bg-amber-300 text-black p-7 outline-none focus:bg-amber-400 transition'
                    />
                    <textarea 
                        name="message" 
                        required
                        placeholder='Message' 
                        className=' rounded-2xl h-35 bg-amber-300 text-black p-7 outline-none focus:bg-amber-400 transition'
                    ></textarea>  
                    
                    <button type='submit' className=' rounded-2xl p-6 bg-amber-500 text-black hover:bg-amber-800 hover:text-amber-50 text-xs md:text-2xl cursor-pointer transition duration-300'>
                        SUBMIT
                    </button>           
                </form>
            </div>
        </div>
    )
}