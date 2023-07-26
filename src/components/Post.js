import React from 'react';

export default function Post({ post, onDelete, onLike, onDislike, onEdit }){
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedPost, setEditedPost] = React.useState(post.text);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      onEdit(post.id, editedPost);
      setIsEditing(false);
    };
  
    return (
      <div className="post">
        {isEditing ? (
          <>
            <p className = "username edit">{post.username}</p>
            <textarea className = "textarea" value={editedPost} onChange={(e) => setEditedPost(e.target.value)} />
            <button  className = 'share' onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <>
            <div className='row1'>
                <p className = "username">{post.username}</p>
                <div className="post-buttons">
                    <button onClick={handleEditClick}><i class="bi bi-pencil-square"></i></button>
                    <button onClick={() => onDelete(post.id)}><i class= "bi bi-trash"></i></button>
                </div>
            </div>
            <p className="postText">{post.text}</p>
            <div className="post-feedback">
              <button onClick={() => onLike(post.id)}><i class="bi bi-hand-thumbs-up-fill"></i> {post.likes}</button>
              <button onClick={() => onDislike(post.id)}><i class="bi bi-hand-thumbs-down-fill"></i> {post.dislikes}</button>
            </div>
          </>
        )}
      </div>
    );
};