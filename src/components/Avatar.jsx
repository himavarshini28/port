import React from 'react';

const Avatar = () => {
  const avatarUrl = "https://api.dicebear.com/8.x/pixel-art/svg?seed=JohnDoe&backgroundColor=b6e3f4,c0aede,d1d4f9";

  return (
    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
      <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
