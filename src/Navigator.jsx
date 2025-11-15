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
                        <li><a className=" p-0" href="https://www.threads.com/@hanant.16" target="blac_"><Icon icon="ph:threads-logo-fill" width="30"  /></a></li>
                        <li><a className=" p-0" href="" target="blac_"><Icon icon="pajamas:linkedin" width="30" /></a></li>
                        <li><a className=" p-0" href="https://github.com/NeuroSmith-nan?tab=repositories" target="blac_"><Icon icon="ri:github-fill" width="30" /></a></li>
                        <li><a className=" p-0" href="" target="blac_"><Icon icon="fa7-brands:kaggle" width="17" /></a></li>
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