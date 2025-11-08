// components/ScrollOverlaySection.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollOverlaySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transformasi untuk mengontrol posisi overlay
  const overlayY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  
  // Animasi opacity untuk efek fade
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div 
      ref={containerRef}
      className="relative top-[300vh] h-[300vh] bg-gradient-to-b from-green-bg-dark to-green-accent-dark overflow-hidden"
    >

      {/* Overlay Section - Muncul dari bawah */}
      <motion.div 
        style={{ 
          y: overlayY,
          opacity: overlayOpacity
        }}
        className="fixed top-0 left-0 w-full h-screen bg-green-bg-dark z-10 flex items-center justify-center p-8"
      >
        <div className="text-center max-w-3xl">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Skills & <span className="text-green-accent-main">Expertise</span>
          </motion.h2>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
          >
            {[
              { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind'] },
              { category: 'Backend', items: ['Laravel', 'Node.js', 'MySQL'] },
              { category: 'Tools', items: ['Git', 'Docker', 'Figma'] }
            ].map((group, idx) => (
              <div 
                key={idx}
                className="bg-green-accent-dark/20 backdrop-blur-sm rounded-xl p-6 border border-green-accent-main/30"
              >
                <h3 className="text-green-accent-main font-bold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {group.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-green-accent-main/10 text-green-accent-main rounded-full text-sm border border-green-accent-main/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollOverlaySection;