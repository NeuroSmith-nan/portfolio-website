import { useEffect, useState } from 'react'
import Navigator from './Navigator'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contackt from './Contact'
import Footer from './Footer'


import Pf2 from './assets/Profile2.jpg'


function App() {
  const [theme,setTheme] = useState(localStorage.getItem('mode') || 'light')

  // useEffect ของคุณดีอยู่แล้ว (ไม่ต้องแก้ ถ้าจะใช้กับ <html>)
  useEffect(()=>{
    localStorage.setItem('mode',theme)
    
    // โค้ดนี้ยังจำเป็น เพื่อให้ CSS ภายนอก (ถ้ามี) รู้จัก theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
  },[theme])

  // 2. สร้าง array ข้อมูล
  const experiencesData = [
    {
      id: 1,
      img: Pf2,
      title: 'Senior Developer @ Google',
      description: 'พัฒนาระบบ Search Algorithm และทำงานกับทีม AI'
    },
    {
      id: 2,
      img: Pf2,
      title: 'Mid-Level Developer @ Facebook',
      description: 'ดูแลส่วนของ News Feed และพัฒนาระบบ Real-time'
    },
    {
      id: 3,
      img: Pf2,
      title: 'Junior Developer @ Startup',
      description: 'เรียนรู้การทำงานแบบ Agile และสร้างฟีเจอร์ใหม่ๆ'
    },
    {
      id: 4,
      img: Pf2,
      title: 'Project Freelance',
      description: 'รับงานทำเว็บแอปพลิเคชันด้วย React และ Node.js'
    }
  ];

  return (
    <div className={theme}>
      <div className=' font-mono scroll-auto'>
        <Navigator theme={theme} setTheme={setTheme}/>
        <Header/>
        <About/>
        <Experience/>   
        <Skills/>
        <Projects/>
        <Contackt/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default App