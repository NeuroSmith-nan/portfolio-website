import { Icon } from '@iconify/react';

export default function Skills({skillsData}){
    return(
        <div className='skill-container w-full h-auto flex flex-col p-6 md:p-10 lg:py-16' >
            <div id="Skill" className=" flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className=" text-2xl md:text-3xl font-semibold tracking-widest">S K I L L S</h1>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 pr-35 pl-35">
            { skillsData.map( sk =>(
                <div className=' flex flex-col justify-center items-center p-5'>
                    <span className=' mb-3'><Icon icon={sk.skill} width={60}/></span>
                     <p className=' text-xs md:text-lg'>({sk.title})</p>
                </div>
            ))}
            </div>
        </div>
    )
}