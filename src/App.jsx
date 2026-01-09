import { useEffect, useState } from 'react'
import Navigator from './Navigator'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contackt from './Contact'
import Footer from './Footer'
import portfolioData from './data.json';


export default function App() {
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

  const { experienceData, skillsData, projectData } = portfolioData;

  

  return (
    <div className={theme}>
      <div className=' font-mono scroll-auto'>
        <Navigator theme={theme} setTheme={setTheme}/>
        <Header/>
        <About/>
        <Experience experiencesData={experienceData}/>   
        <Skills skillsData={skillsData}/>
        <Projects projectData={projectData} />
        <Contackt/>
        <Footer/>
        
      </div>
    </div>
  )
}

