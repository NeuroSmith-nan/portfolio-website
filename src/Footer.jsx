import { Icon } from '@iconify/react';

export default function Footer(){
    return(
        <>
            {/* Fixed footer - positioned at bottom like Navigator */}
            <div className=" w-full h-20 flex items-center cursor-pointer field fixed bottom-0 left-0 z-50 ">
                <div className=' w-[60px] h-15 rounded-full mx-auto flex justify-center items-center '>
                    <ul>
                        <li><a className='p-0' href="#"><Icon icon="line-md:upload-loop" width="45"/></a></li>
                    </ul>
                </div>
            </div>
            <div className=' w-full h-8'></div>
        </>
    )
}