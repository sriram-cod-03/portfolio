import React, { useEffect, useRef, useState } from "react";

export const SpaceBackground = () => {
  const canvasRef = useRef(null);
  
  // 🚀 Added state to detect if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check initially
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // 🚀 If it's a mobile device, stop the heavy canvas animation completely!
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Generate random space stars mapping
    const numStars = 140;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Cosmic space gradient depth
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#06020b");
      gradient.addColorStop(0.5, "#0d0518");
      gradient.addColorStop(1, "#05010a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Rendering and moving stars fields
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Star breathing opacity effect
        ctx.shadowBlur = Math.random() * 4 + 2;
        ctx.shadowColor = "#c084fc";
        ctx.fill();

        star.y += star.velocity;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      ctx.shadowBlur = 0; // reset glow boilerplate
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]); // Re-run effect if mobile state changes

  // 🚀 For Mobile: Return a simple, ultra-fast solid background div instead of canvas
  if (isMobile) {
    return (
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
          pointerEvents: "none",
          background: "#0a0416", // Solid dark color that won't lag old GPUs
        }}
      />
    );
  }

  // 🚀 For Laptop/PC: Return the heavy canvas animation
  return (
<canvas
  ref={canvasRef}
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -2,
    pointerEvents: "none",
    willChange: "transform", // 🚀 GPU-ku signal kudukkum
    backfaceVisibility: "hidden"
  }}
/>
  );
};