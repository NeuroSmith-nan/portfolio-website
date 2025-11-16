import { useEffect, useState } from 'react'
import Navigator from './Navigator'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contackt from './Contact'
import Footer from './Footer'
import { Icon } from '@iconify/react';

import Pf2 from './assets/react.svg'


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

  // Experience ----------------------------------------------------------------------------
  const experienceData = [
    {
      id: 1,
      img: '/public/Dental.png',
      title: `Children's dental segmentation`,
      tools:['devicon:python','material-icon-theme:pytorch','devicon:anaconda'],
      description: 'พัฒนาระบบ Search Algorithm และทำงานกับทีม AI'
    },
    {
      id: 2,
      img: '/public/Before.jpg',
      title: '**************',
      tools:['devicon:python','simple-icons:yolo','devicon:opencv'],
      description: 'พัฒนาระบบ Search Algorithm และทำงานกับทีม AI'
    },
    {
      id: 3,
      img: '/public/Crime.jpg',
      title: 'Analysis of USA crime',
      tools:['devicon:python','devicon:numpy','devicon:pandas'],
      description: 'พัฒนาระบบ Search Algorithm และทำงานกับทีม AI'
    },
    
  ];

  // Project ----------------------------------------------------------------------------
  const projectData = [
    {
      id:101,
      img:Pf2,
      pjname:'Bitcoin predicetion',
      tools:'devicon:python',
      description:' เทนร AI'
    },
    {
      id:102,
      img:Pf2,
      pjname:'Bitcoin predicetion',
      tools:'devicon:python',
      description:' เทนร AI2'
    },

  ];

  return (
    <div className={theme}>
      <div className=' font-mono scroll-auto'>
        <Navigator theme={theme} setTheme={setTheme}/>
        <Header/>
        <About/>
        <Experience experiencesData={experienceData}/>   
        <Skills/>
        <Projects projectData={projectData} />
        <Contackt/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default App