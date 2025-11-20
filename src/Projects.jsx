import { Icon } from '@iconify/react';

export default function Projects({projectData}){
    return(
        <div className='home-container w-full h-auto flex flex-col flex-2 p-5' >
            <div id="Projects" className=" flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className=" text-2xl md:text-3xl font-semibold tracking-widest">P R O J E C T S</h1>
            </div>
            <div className=" 
                projects-container w-full h-auto 
                flex gap-8 pb-4 overflow-x-auto
            ">

                {projectData.map(item => (
                    <div class="projects-item 
                        shrink-0 w-full bg-gray-100/5 hover:bg-gray-100/10  rounded-2xl p-10 md:p-15 shadow-lg
                        flex flex-col gap-3
                        " key={item.id}>
                        <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 pl-10 pr-10  md:pl-20 md:pr-20'>
                            <img className=' w-80 h-40 md:w-100 md:h-50 lg:w-140 lg:h-70 rounded-2xl mx-auto' src={item.img} alt={item.pjname} />
                            <div className=' flex flex-col gap-6 items-center justify-center'>
                                <h2 className=' flex justify-center items-center md:text-xl lg:text-3xl'>{item.pjname}</h2>
                                <div className=' grid grid-cols-3 gap-5 '>
                                { item.tools.map( toolName =>(
                                    <ul key={toolName}>
                                        <li className=' flex justify-center '><Icon icon={toolName} width="35" /></li>
                                    </ul>
                                ))}
                                </div>
                            </div>
                        </div>
                        <p className=' flex justify-center text-sm md:text-xl mt-5'>{item.description}</p>
                        <h2 className=' flex justify-center text-xl text-amber-600'>&lt; {item.id} &gt;</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}