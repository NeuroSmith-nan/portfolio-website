import { Icon } from '@iconify/react';
import Pj1 from './assets/Project1.jpg'

export default function Experience(){
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
                
                {/* --- Card 1 --- */}
                <div className="
                    flex flex-col shrink-0 snap-start 
                    w-[90%] sm:w-[80%] md:w-[60%] lg:w-auto
                    rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800
                ">
                    <img className='w-full h-56 object-cover' src={Pj1} alt="Project 101" />
                    
                    <div className="p-6 flex flex-col grow items-center text-center">
                        <h1 className='text-2xl font-semibold mb-3'>Project 101</h1>
                        <ul className='flex gap-3 items-center mb-4'>
                            <li><Icon icon="devicon:python" width="30" /></li>
                            <li><Icon icon="devicon:react" width="30" /></li>
                            <li><Icon icon="devicon:tailwindcss" width="30" /></li>
                        </ul>
                        {/* จุดที่แก้ไข: กำหนด h-24 และ overflow-y-auto ให้ Paragraph */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm h-24 overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium laboriosam similique quas nisi velit, veniam inventore earum fugiat et voluptates voluptatibus ipsam at doloremque facere laborum error. Corrupti inventore amet sint quidem est. Magni vel praesentium iste nemo voluptate deleniti laboriosam perferendis magnam quas dolores quos, obcaecati id amet?
                            <br/><br/>
                            (This text is long enough to force the scrollbar to appear, demonstrating the fixed height and scrolling behavior.)
                        </p>
                    </div>
                </div>

                {/* --- Card 2 --- */}
                <div className="
                    flex flex-col shrink-0 snap-start 
                    w-[90%] sm:w-[80%] md:w-[60%] lg:w-auto
                    rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800
                ">
                    <div className='w-full h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500'>
                        [Image Placeholder]
                    </div>
                    
                    <div className="p-6 flex flex-col grow items-center text-center">
                        <h1 className='text-2xl font-semibold mb-3'>Project 102</h1>
                        <ul className='flex gap-4 items-center mb-4 text-sm font-medium text-gray-700 dark:text-gray-300'>
                            <li>Tools 1</li>
                            <li>Tools 2</li>
                            <li>Tools 3</li>
                        </ul>
                        {/* จุดที่แก้ไข: กำหนด h-24 และ overflow-y-auto ให้ Paragraph */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm h-24 overflow-y-auto">
                            Detail about project 102 and what was accomplished. When the text is too short, the box remains the same height, and the scrollbar does not appear.
                        </p>
                    </div>
                </div>

                {/* --- Card 3 --- */}
                <div className="
                    flex flex-col shrink-0 snap-start 
                    w-[90%] sm:w-[80%] md:w-[60%] lg:w-auto
                    rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800
                ">
                    <div className='w-full h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500'>
                        [Image Placeholder]
                    </div>
                    
                   
                </div>

            </div>
        </div>
    )
}