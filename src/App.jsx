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
  const [experience,setExperience] = useState([]);
  const [skill,setSkill] = useState([]);
  const [project,setProject] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const { experienceData, skillsData, projectData } = portfolioData;

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

  useEffect(()=>{
    const fetchAllData = async () =>{
      try{
        const [response_EP,response_SK,response_PJ] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/experience/'),
          fetch('http://127.0.0.1:8000/api/skill/'),
          fetch('http://127.0.0.1:8000/api/project/')
        ])
        if(!response_EP.ok){
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล Experience')
        }else if(!response_SK.ok){
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล Skill')
        }else if(!response_PJ.ok){
          throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล Project')
        }else{
          const [data_EP,data_SK,data_PJ] = await Promise.all([
            response_EP.json(),
            response_SK.json(),
            response_PJ.json()
          ])

          setExperience(data_EP);
          setSkill(data_SK);
          setProject(data_PJ);
          setLoading(false);

        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllData();
  },[])
  
  if (loading) return <h1>downloading...</h1>

  return (
    <div className={theme}>
      <div className=' font-mono scroll-auto'>
        <Navigator theme={theme} setTheme={setTheme}/>
        <Header/>
        <About/>
        <Experience experiencesData={experience.length > 0 ? experience : experienceData}/>   
        <Skills skillsData={skill.length > 0 ? skill : skillsData}/>
        <Projects projectData={project.length > 0 ? project : projectData} />
        <Contackt/>
        <Footer/>
        
      </div>
    </div>
  )
}

