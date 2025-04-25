
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b0764_0%,rgba(0,0,0,0)_50%)] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-blob1 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-blob2 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-blob3 -z-10" />
    </div>
  );
};

export default AnimatedBackground;
