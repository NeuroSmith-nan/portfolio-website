import { Icon } from '@iconify/react';

export default function Contackt(){
    return(
        <div className="cont-container w-full h-auto flex flex-col p-6 md:p-10 lg:p-16">

            <div id="Contact" className="flex w-full py-10 md:py-16 items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-widest">C O N T A C K T</h1>
            </div>
            <div className="w-full h-auto flex flex-col md:items-start gap-3 md:gap-5 p-3 border">
                <h1>I have got just what you neeed,<span className=" underline ">Lets talk.</span></h1>
                <h2 ><Icon icon="fluent:phone-48-regular" width="30" /> +66622039755</h2>
                <h2><Icon icon="clarity:email-solid" width="30" />hanant.devcodingai.22@gmail.com</h2>
                <h2><Icon icon="line-md:map-marker-loop" width="30" />Bangkok, Thailand</h2>
                <form className=' p-4 grid grid-cols-2 gap-2' action="">
                    <input name='name' type="text"  placeholder='Name'/>
                    <input name='email' type="email" placeholder='Email'/>
                    <input name='subject' type="text" placeholder='Subject'/>
                    <input  name='Message' type="text" placeholder='Message' />
                </form>
            </div>
        </div>
    )
}