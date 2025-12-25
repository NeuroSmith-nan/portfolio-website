// src/components/AnimatedCircles.jsx
import './AnimatedCircles.css';

function AnimatedCircles({ theme }) {
  const lightStrokeColor = 'rgba(42, 42, 42, 1)';
  const darkStrokeColor = '#E0E6F8';
  
  const numCircles = 5;
  
  const circleElements = Array.from({ length: numCircles }).map((_, index) => (
    <circle
      key={index}
      className="animated-circle"
      cx="50%"
      cy="50%"
      // 1. เปลี่ยน r เป็นค่าคงที่ (เช่น 1px หรือเล็กๆ แล้วเราจะ scale เอา)
      r="40" 
      fill="none"
      style={{ 
        animationDelay: `${index * 0.8}s`,
        stroke: theme === 'light' ? lightStrokeColor : darkStrokeColor,
        // 2. บอก Browser ว่า property นี้จะมีการเปลี่ยนแปลง (ช่วยเรื่อง Performance)
        willChange: 'transform, opacity' 
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