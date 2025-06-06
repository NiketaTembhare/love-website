import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HamburgerMenu from '../components/HamburgerMenu.jsx';
import EmojiRow from '../components/EmojiRow.jsx';
import CommentSection from '../components/CommentSection.jsx';

function HomePage({ onLogout }) {
  const [thought, setThought] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * 9)); // Random initial image
  const profileImages = [
    '/images/profile.jpg',
    '/images/profile1.jpg',
    '/images/profile2.jpg',
    '/images/profile3.jpg',
    '/images/profile4.jpg',
    '/images/profile5.jpg',
    '/images/profile6.jpg',
    '/images/profile7.jpg',
  ];

  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = `petal petal-${Math.floor(Math.random() * 3)}`;
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 10000);
    };
    const petalInterval = setInterval(createPetal, 500);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 9); // Cycle through 9 images
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(petalInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const handleEmojiClick = (emoji, thoughtText, animationType) => {
    setThought({ emoji, text: thoughtText, animationType });
    setTimeout(() => setThought(null), 5000); // Clear thought after 5 seconds
  };

  const handleProfileClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 9); // Change to next image
  };

  return (
    <div className="min-h-screen flex flex-col bg-shiny">
      <HamburgerMenu onLogout={onLogout} />
      <h1 className="text-5xl text-pink-600 text-center mt-8 mb-4 border-b-4 border-white p-4">
        Welcome to your place Dj
      </h1>
      <EmojiRow onEmojiClick={handleEmojiClick} />
      {thought && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 p-4 rounded-lg shadow-lg text-pink-700 text-xl z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {thought.text}
          {thought.animationType === 'bombing' && (
            <div className="heart-bombing">
              {[...Array(10)].map((_, i) => (
                <motion.span
                  key={i}
                  className="heart-emoji"
                  style={{ color: ['#ff5e62', '#ff69b4', '#ba55d3'][Math.floor(Math.random() * 3)] }}
                  initial={{ y: 0, x: Math.random() * 100 - 50 }}
                  animate={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                >
                  ❤️
                </motion.span>
              ))}
            </div>
          )}
          {thought.animationType === 'sliding' && (
            <motion.span
              className="heart-emoji"
              style={{ color: '#ff69b4' }}
              initial={{ x: -100 }}
              animate={{ x: 100 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💖
            </motion.span>
          )}
          {thought.animationType === 'jumping' && (
            <motion.span
              className="heart-emoji"
              style={{ color: '#ba55d3' }}
              initial={{ y: 0 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              💕
            </motion.span>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mt-20"
      >
        <img
          src={profileImages[currentImageIndex]}
          alt="Dhananjay Raut"
          className="w-48 h-64 object-cover border-4 border-white shadow-lg rounded-3xl cursor-pointer"
          onClick={handleProfileClick}
        />
        <h2 className="text-2xl text-pink-700 mt-4 font-bold">Dhananjay</h2>
        <p className="text-pink-600 font-bold">DOB: 06/12/2002</p>
      </motion.div>
      <div className="max-w-2xl mx-auto mt-8 p-4 border-4 border-white rounded-lg shadow-lg">
        <p className="text-pink-800 font-extrabold font-josefin">
          Allu, there are not enough words in the world to describe how much you mean to me, but I’ll still try. You’ve always been more than just a friend—you're like family to me, someone who’s been by my side through every high and low. Our bond isn’t ordinary; it’s rare, strong, and real. We've laughed together like there's no tomorrow, argued like siblings, and stood by each other like warriors in the same battle. Life hasn't always been fair or easy, but the way you carry yourself with strength and resilience is something I deeply admire.

You have this silent strength in you, Allu—a kind that doesn’t shout but shines when it’s needed the most. I’ve seen you during your best days, and I’ve stood with you during the tough ones too. No matter how bad a day got, you somehow managed to keep going, even when the weight of the world felt too heavy. And that’s what makes you truly strong. Not just surviving, but still being kind, still being you, still moving forward when everything in you felt like giving up.

Our fights—let’s talk about those for a second. God knows how many times we’ve disagreed or misunderstood each other. There were times we both were stubborn, quiet, or just plain angry. But what makes us different is that no matter how big the fight was, we always found our way back. We never gave up on this friendship. We listened, forgave, and chose love over ego. That’s rare, and it’s beautiful. Every fight made our bond deeper, every misunderstanding taught us more about each other, and every resolution made us closer than before.

Life has its own pace, Allu. Sometimes it throws storms, sometimes blessings. But I want you to know—you are made for greatness. You are stronger than your fears, more capable than your doubts, and far more important than you sometimes realize. There’s a whole world out there waiting for someone like you to shine. So don’t let setbacks stop you. Don’t let the past weigh you down. You are not defined by your mistakes, but by the courage you show every day to keep growing, keep learning, and keep loving.

This bond we share, it’s not just about memories. It’s about a connection that keeps us grounded, reminds us who we are, and tells us we’re never alone. So even when things feel uncertain, I want you to remember—I'm here. Life might not always go as planned, but we’ve come this far, haven’t we? And we’ll go even farther. You’ve got the fire, the heart, and the soul to make it through anything.

So keep going, Allu. Keep dreaming, keep fighting, and keep believing in yourself. Your story is still being written, and I know the best chapters are yet to come. You’ve got this—and I’ve got you, always.
        </p>
      </div>
      <CommentSection />
      <footer className="mt-auto bg-pink-100 p-4 text-center text-pink-600 border-t-4 border-white">
        <p>Programmer: Gobi ka Phool</p>
        <p>Email: tembharegdg@gmail.com</p>
        <p>Location: Nagpur</p>
        <p>Phone: +1234567890</p>
        <p>Instagram: @i.nick.abode</p>
      </footer>
    </div>
  );
}

export default HomePage;