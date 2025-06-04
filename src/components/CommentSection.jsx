import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(storedComments);
  }, []);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h3 className="text-xl text-pink-600 mb-4">Comments</h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
        className="border p-2 w-full rounded mb-4 font-josefin"
      />
      <button
        onClick={handleCommentSubmit}
        className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
      >
        Post Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-pink-100 p-2 rounded mb-2 flex justify-between items-center"
          >
            <span>{comment}</span>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 text-sm hover:text-red-700"
            >
              🗑️
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;