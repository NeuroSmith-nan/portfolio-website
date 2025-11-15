// src/components/AnimatedCircles.jsx
import './AnimatedCircles.css'; // Import CSS สำหรับการเคลื่อนไหว

// 1. รับ 'theme' prop
function AnimatedCircles({ theme }) {
  
  // 2. กำหนดสีสำหรับแต่ละโหมด
  const lightStrokeColor = 'rgba(42, 42, 42, 1)'; // (สี slate-400)
  const darkStrokeColor = '#E0E6F8';             // (สีที่คุณกำหนด)
  
  const numCircles = 5;
  
  const circleElements = Array.from({ length: numCircles }).map((_, index) => (
    <circle
      key={index}
      className="animated-circle" // Class นี้ใช้สำหรับ Animation เท่านั้น
      cx="50%"
      cy="50%"
      r="0"
      strokeWidth="1.5"
      fill="none"
      
      // 3. ใช้ Inline Style เพื่อ "เขียนสีตรงๆ"
      style={{ 
        animationDelay: `${index * 0.8}s`,
        
        /* 4. เลือกสีเส้นตาม 'theme' prop */
        stroke: theme === 'light' ? lightStrokeColor : darkStrokeColor
      }} 
    />
  ));

  return (
    <div className="animated-circles-container">
      <svg className="animated-circles-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {circleElements}
      </svg>
    </div>
  );
}

export default AnimatedCircles;