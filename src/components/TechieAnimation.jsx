import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, GitBranch, Database, ShieldCheck, Cpu, Server, MousePointer2 } from 'lucide-react';

const TechieAnimation = () => {
  const codeString = `
    const portfolio = {
      name: "John Doe",
      skills: ["React", "Node.js", "AI"],
      build: () => {
        console.log("Building awesome stuff... ✨");
      }
    };
  `;

  const characters = codeString.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: i * 0.3 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const icons = [
    { icon: <Code />, x: -150, y: -80, delay: 0.5 },
    { icon: <Terminal />, x: 150, y: -40, delay: 1 },
    { icon: <GitBranch />, x: -120, y: 80, delay: 1.5 },
    { icon: <Database />, x: 180, y: 100, delay: 2 },
    { icon: <ShieldCheck />, x: 0, y: 150, delay: 2.5 },
    { icon: <Cpu />, x: -200, y: 0, delay: 3 },
    { icon: <Server />, x: 200, y: 0, delay: 3.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="font-mono text-xs md:text-sm text-gray-400 p-4 rounded-lg bg-gray-900/50 border border-gray-700 w-full max-w-md h-64 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={child} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="absolute text-cyan-400"
        animate={{
          x: [0, 100, 50, -80, 0],
          y: [0, -50, 100, 50, 0],
          rotate: [0, 10, -5, 10, 0],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <MousePointer2 size={24} />
      </motion.div>

      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-500"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: item.x,
            y: item.y,
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 8,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default TechieAnimation;
