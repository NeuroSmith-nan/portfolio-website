import { useEffect, useState } from 'react'
import Navigator from './Navigator'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contackt from './Contact'
import Footer from './Footer'

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
      tools:['devicon:python','material-icon-theme:pytorch','devicon:anaconda','simple-icons:yolo'],
      description: 'พัฒนาระบบ Search Algorithm และทำงานกับทีม AI'
    },
    {
      id: 2,
      img: '/public/Before.jpg',
      title: '**************',
      tools:['devicon:python','devicon:opencv','simple-icons:yolo'],
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

  // Skill ----------------------------------------------------------------------------
  const skillsData = [
    {
      id:1,
      skill:'vscode-icons:file-type-html',
      title:'Intermediate'
    },
    {
      id:2,
      skill:'devicon:css3',
      title:'Intermediate'
    },
    {
      id:3,
      skill:'vscode-icons:file-type-js-official',
      title:'Intermediate'
    },
    {
      id:4,
      skill:'logos:react',
      title:'Intermediate'
    },
    {
      id:5,
      skill:'skill-icons:tailwindcss-light',
      title:'Intermediate'
    },
    {
      id:6,
      skill:'vscode-icons:file-type-python',
      title:'Intermediate'
    },
    {
      id:7,
      skill:'skill-icons:flask-light',
      title:'Intermediate'
    },
    {
      id:8,
      skill:'devicon:numpy',
      title:'Intermediate'
    },
    {
      id:9,
      skill:'devicon:pandas',
      title:'Intermediate'
    },
    {
      id:10,
      skill:'devicon:matplotlib',
      title:'Intermediate'
    },
    {
      id:11,
      skill:'devicon:scikitlearn',
      title:'Intermediate'
    },
    {
      id:12,
      skill:'material-icon-theme:django',
      title:'Intermediate'
    },
  ];

  // Project ----------------------------------------------------------------------------
  const projectData = [
    {
      id:1,
      img:'/public/Porsche-911.jpg',
      pjname:'Bitcoin predicetion',
      tools:['devicon:python','devicon:numpy','devicon:pandas'],
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, expedita voluptates alias, incidunt perferendis eos facilis ducimus ea animi explicabo cupiditate voluptatum fuga distinctio repudiandae velit voluptas dolor vero! Vitae similique nostrum voluptatum commodi quidem! Quae, fugit? Repudiandae, blanditiis ab!'
    },
    {
      id:2,
      img:'/public/unsplash.jpg',
      pjname:'Bitcoin predicetion',
      tools:['devicon:python','devicon:numpy','devicon:pandas'],
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
        <Skills skillsData={skillsData}/>
        <Projects projectData={projectData} />
        <Contackt/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default App