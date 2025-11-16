import { Icon } from '@iconify/react';
import './Projects.css'

export default function Projects({projectData}){
    return(
        <div className='home-container w-full h-[790px] flex flex-col flex-2 p-5' >
            <div id="Projects" className=" flex  text-2xl w-70 h-[20%] mx-auto items-center  justify-center">
                <h1 className="text-2xl ">P R O J E C T S</h1>
            </div>
            <div className=" projects-container h-[80%]">
                {projectData.map(item => (
                    <div class="projects-item" key={item.id}> {/* <-- ใส่ key ที่นี่ */}
                        <img src={item.img} alt={item.pjname} />
                        <h2>{item.pjname}</h2>
                        <ul>
                            <li><Icon icon={item.tools} width="30" /></li>
                        </ul>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}