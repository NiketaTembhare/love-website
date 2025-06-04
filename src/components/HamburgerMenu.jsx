import React, { useState } from 'react';
import { motion } from 'framer-motion';

function HamburgerMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute top-4 left-4">
      <button onClick={toggleMenu} className="text-pink-600 text-2xl">
        ☰
      </button>
      {isOpen && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="bg-pink-200 p-6 rounded-lg shadow-lg h-64 flex flex-col justify-between"
        >
          <ul>
            <li className="mb-4"><a href="#" className="text-pink-600 text-lg hover:underline">Your Diary</a></li>
            <li className="mb-4"><a href="#" className="text-pink-600 text-lg hover:underline">Games</a></li>
          </ul>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-600"
          >
            Log Out
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default HamburgerMenu;