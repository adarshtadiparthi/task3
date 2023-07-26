import React from 'react';
import './DashBoard.css';

import Post from './Post.js';
import PostForm from './PostForm.js';

export default function LandingPage(){
    const [posts, setPosts] = React.useState([]);
    const [alertMessage, setAlertMessage] = React.useState('');
  
    const addPost = (text) => {
      const newPost = {
        id: Date.now(),
        username: "Random Name", // Replace with proper user authentication implementation
        text: text,
        likes: 0,
        dislikes: 0,
      };
      setPosts([...posts, newPost]);
      setAlertMessage('Post created successfully!');

      setTimeout(() => setAlertMessage(""),3000);
    };
  
    const deletePost = (postId) => {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      setAlertMessage('Post deleted successfully!');

      setTimeout(() => setAlertMessage(""),3000);
    };
  
    const likePost = (postId) => {
      const updatedPosts = posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      );
      setPosts(updatedPosts);
    };
  
    const dislikePost = (postId) => {
      const updatedPosts = posts.map((post) =>
        post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
      );
      setPosts(updatedPosts);
    };
  
    const editPost = (postId, text) => {
      const updatedPosts = posts.map((post) =>
        post.id === postId ? { ...post, text } : post
      );
      setPosts(updatedPosts);
      setAlertMessage('Post edited successfully!');

      setTimeout(() => setAlertMessage(""),3000);
    };
  
    return (
        <div className = "container">
            <div className="landingPage">
            <PostForm onAddPost={addPost} />
            {alertMessage && <div className="alert">{alertMessage}</div>}
            {posts.map((post) => (
            <Post
                key={post.id}
                post={post}
                onDelete={deletePost}
                onLike={likePost}
                onDislike={dislikePost}
                onEdit={editPost}
            />
        ))}
      </div>
        </div>
    );
};
  
