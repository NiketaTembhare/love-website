import React from 'react';
import { motion } from 'framer-motion';

function EmojiRow({ onEmojiClick }) {
  const emojis = [
    { emoji: '😊', thought: 'You make me smile!', animation: 'bombing' },
    { emoji: '❤️', thought: 'My heart beats for you!', animation: 'sliding' },
    { emoji: '🌟', thought: 'You’re my shining star!', animation: 'jumping' },
    { emoji: '🥰', thought: 'Forever in love with you!', animation: 'bombing' },
    { emoji: '💖', thought: 'Our love sparkles!', animation: 'sliding' },
    { emoji: '😍', thought: 'You’re absolutely adorable!', animation: 'jumping' },
    { emoji: '✨', thought: 'You light up my world!', animation: 'bombing' },
    { emoji: '💕', thought: 'Two hearts, one soul!', animation: 'sliding' },
    { emoji: '😘', thought: 'Sending you kisses!', animation: 'jumping' },
    { emoji: '🌸', thought: 'Our love blooms!', animation: 'bombing' },
  ];

  const animations = {
    bombing: { scale: 1.5, y: -20 },
    sliding: { x: [-10, 10, -10] },
    jumping: { y: [-10, 0, -10] },
  };

  return (
    <div className="flex justify-center gap-4 mt-4 flex-wrap">
      {emojis.map((item, index) => (
        <motion.button
          key={index}
          className="emoji-button text-4xl"
          whileHover={{ scale: 1.3 }}
          whileTap={animations[item.animation]}
          transition={{ duration: 0.3 }}
          onClick={() => onEmojiClick(item.emoji, item.thought, item.animation)}
        >
          {item.emoji}
        </motion.button>
      ))}
    </div>
  );
}

export default EmojiRow;