import { Icon } from '@iconify/react';

export default function Experience({experiencesData}){
    return(
        // Outer Container: ใช้ h-auto และ Responsive Padding
        <div className='home-container w-full h-auto flex flex-col p-6 md:p-10 lg:py-16' >
            
            <div id="Experience" className="flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-widest">E X P E R I E N C E</h1>
            </div>

            {/* Content Container: Flex, Horizontal Scroll, W-full 
                - ลบ max-w-6xl mx-auto ออก เพื่อให้ใช้ w-full ตามที่ร้องขอ
                - Mobile (default): flex, overflow-x-auto, snap-x (Horizontal Scroll)
                - Desktop (lg:): เปลี่ยนเป็น grid, 3 คอลัมน์
            */}
            <div className="
                w-full h-auto 
                flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
                lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible
            ">

                {experiencesData.map( exp =>(
                     <div className=" Card1
                    flex flex-col shrink-0 snap-start 
                    w-[90%] sm:w-[80%] md:w-[60%] lg:w-auto
                    rounded-lg shadow-lg shadow-gray-900 overflow-hidden bg-gray-700">
                    <img className='w-full h-56 object-cover' src={exp.img} alt={exp.title} />
                    
                    <div className="p-6 flex flex-col grow items-center text-center">
                        <h1 className='text-2xl font-semibold mb-3 text-white'>{exp.title}</h1>
                        <div className='flex gap-3 items-center mb-4 '>
                        {exp.tools.map(toolName => (
                            <ul className=' text-white' key={toolName} >
                                <li><Icon icon={toolName} width={25}/></li>
                            </ul>
                        ))}
                        </div>
                        {/* จุดที่แก้ไข: กำหนด h-24 และ overflow-y-auto ให้ Paragraph */}
                        <p className=" text-white text-sm h-24 overflow-y-auto">
                            {exp.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}