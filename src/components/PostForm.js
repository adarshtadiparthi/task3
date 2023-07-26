import React from 'react';
import './DashBoard.css';

export default function PostForm({ onAddPost }){
    const [postText, setPostText] = React.useState('');
  
    const handleShareClick = () => {
      if (postText.trim() !== '') {
        onAddPost(postText);
        setPostText('');
      }
    };
  
    return (
      <div className="post-form">
        <textarea value={postText} onChange={(e) => setPostText(e.target.value)} placeholder='Post your thoughts'  className = "textarea"/>
        <button onClick={handleShareClick} className = 'share'>Share</button>
      </div>
    );
};