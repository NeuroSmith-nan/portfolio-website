import { Icon } from '@iconify/react';

export default function Skills({ skillsData }) {
  return (
    <div className='skill-container w-full min-h-screen flex flex-col items-center py-10 px-4 md:px-10 lg:py-16'>
      
      {/* Header */}
      <div id="Skill" className="w-full py-8 md:py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase ">
          S K I L L S
        </h1>
      </div>

      {/* Grid Container */}
      {/* ใช้ max-w-5xl เพื่อคุมไม่ให้กว้างเกินไปในจอคอม */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 justify-items-center">
        {skillsData.map((sk, index) => (
          <div 
            key={index}
            className='group flex flex-col justify-center items-center p-2 transition-transform duration-300 hover:scale-110'
          >
            {/* Icon Section */}
            <div className='mb-3'> 
               <Icon 
                 icon={sk.icon || sk.skill} 
                 className="w-10 h-10 md:w-16 md:h-16  " 
               />
            </div>
            
            {/* Text Section */}
            <p className='text-xs md:text-base font-medium text-center '>
              {sk.name || sk.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}