import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Braces, GitBranch, Database, ShieldCheck } from 'lucide-react';

const icons = [
  { icon: <Code size={32} />, color: '#61DAFB' },
  { icon: <Terminal size={32} />, color: '#F0DB4F' },
  { icon: <Braces size={32} />, color: '#F24E1E' },
  { icon: <GitBranch size={32} />, color: '#E0234E' },
  { icon: <Database size={32} />, color: '#4DB33D' },
  { icon: <ShieldCheck size={32} />, color: '#9B59B6' },
];

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          delay: 5,
        }}
      />
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ color: item.color }}
          initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
          animate={{
            x: Math.cos((i / icons.length) * 2 * Math.PI) * 150,
            y: Math.sin((i / icons.length) * 2 * Math.PI) * 150,
            rotate: Math.random() * 360,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 4,
            ease: "circOut",
            delay: i * 0.3,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 5
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroAnimation;
