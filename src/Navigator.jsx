import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { Icon } from '@iconify/react';

export default function Navigator({theme,setTheme}){

    function toggle(){
        if(theme=="light"){
            setTheme("dark")
        }else{
            setTheme("light") 
        }
    }

    return (
        <>
            {/* 1. ย้าย z-50 (z-index สูงสุด) มาไว้ที่ div นี้ */}
            <div className="nav-container w-full h-18 flex justify-between p-5 fixed z-50">
                <div className=" media-link">
                    <ul className=" flex flex-row w-auto gap-3 items-center ">
                        <li><a className=" p-0" href="https://medium.com/@hanant.freelance.22" target="blac_"><Icon icon="ri:medium-fill" width="30" /></a></li>
                        <li><a className=" p-0" href="https://www.linkedin.com/in/abdulhanant-radaeng-4b793b332/" target="blac_"><Icon icon="pajamas:linkedin" width="26" /></a></li>
                        <li><a className=" p-0" href="https://github.com/NeuroSmith-nan?tab=repositories" target="blac_"><Icon icon="ri:github-fill" width="30" /></a></li>
                        <li><a className=" p-0" href="https://www.kaggle.com/houlo7" target="blac_"><Icon icon="fa7-brands:kaggle" width="30" /></a></li>
                    </ul>
                </div>

                {/* 2. ลบ z-50 ออกจาก <ul> และแก้ typo "w-atuo" -> "w-auto" */}
                <div className="">
                    <ul className=" flex flex-row w-auto gap-3 ">
                        <li><a className=" p-0" href="#Contact"><Icon icon="eva:email-outline" width="35" /></a></li>
                        <li className="text-3xl cursor-pointer hover:text-orange-500 "><span role="button" tabIndex={0} onClick={toggle} className="cursor-point">
                            {theme == "light" ? <FaRegLightbulb/>:<FaLightbulb/>}
                        </span></li>
                    </ul> 
                </div>
            </div>

            {/* <div className="w-full h-18 "></div> */}
        </>
    )
}