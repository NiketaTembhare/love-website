import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LoginPage({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showImages, setShowImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const validNames = [
    'dhananjay raut',
    'dhananjay',
    'dj',
    'niketa tembhare',
    'nick',
    'gobi',
    'allu',
  ];
  const correctPassword = '143';
  const correctImage = 'n.jpg';

  const images = ['a.jpg', 'k.jpg', 'p.jpg', 'n.jpg'];

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 10000);
    };
    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    if (
      validNames.includes(name.toLowerCase()) &&
      password === correctPassword
    ) {
      setShowImages(true);
      setError('');
    } else {
      setError('Incorrect name or password');
    }
  };

  const handleSubmit = () => {
    if (selectedImage === correctImage) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        onLogin();
      }, 2000); // Show notification for 2 seconds before navigating
    } else {
      setError('Incorrect image selected');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-shiny">
      <h1 className="text-4xl text-pink-600 mb-8">Welcome, Beboo</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-white">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded font-josefin"
        />
        <p className="text-pink-200 text-sm mb-2">3 digit password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded font-josefin"
        />
        <button
          onClick={handleVerify}
          className="bg-pink-500 text-white p-2 rounded w-full hover:bg-pink-600"
        >
          Verify
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {showImages && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <p className="text-pink-600 text-center mb-4">Choose the correct person Allu</p>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img) => (
                <img
                  key={img}
                  src={`/images/${img}`}
                  alt="auth"
                  className={`w-24 h-24 object-cover rounded cursor-pointer ${
                    selectedImage === img ? 'border-4 border-pink-500' : 'border-2 border-white'
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-pink-500 text-white p-2 rounded w-full mt-4 hover:bg-pink-600"
            >
              Submit
            </button>
          </motion.div>
        )}
        {showNotification && (
          <motion.div
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-pink-100 p-4 rounded-lg shadow-lg text-pink-700 text-xl z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Perfect answer Dj, and I like your answer.
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;