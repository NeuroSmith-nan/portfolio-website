import './Projects.css'

export default function Projects(){
    return(
        <div className='home-container w-full h-[790px] flex flex-col flex-2 p-5' >
            <div id="Projects" className=" flex  text-2xl w-70 h-[20%] mx-auto items-center  justify-center">
                <h1 className="text-2xl ">P R O J E C T S</h1>
            </div>
            <div className=" projects-container h-[80%]">
                <div class="projects-item">
                    <h3>1</h3>
                    <p>...</p>
                </div>

                <div class="projects-item">
                    <h3>2</h3>
                    <p>...</p>
                </div>

            </div>
        </div>
    )
}