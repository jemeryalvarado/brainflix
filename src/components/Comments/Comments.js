import React, { useState } from 'react';
import "./Comments.scss";
import comment from "../../assets/Icons/add_comment.svg";
import avatar from '../../assets/Images/Mohan-muruge.jpg'

const Comments = ({ details }) => {
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState(false);
  const display = details;
  const displayComments = display.comments;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
    setError(false); 
    if (e.target.value.trim()) {
      e.target.classList.add('has-text');
    } else {
      e.target.classList.remove('has-text');
    }
  };

  const handleBlur = (e) => {
    if (!commentText.trim()) {
      setError(true);
    }
  };

  return (
    <div className="comments">
      <section className="comments-form">
        <div className="comments-form-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="form-container">
          <div className="form-container-group">
          <h5>JOIN THE CONVERSATION</h5>
         
          <textarea 
            id="commenttext" 
            type="text" 
            placeholder="Add a new comment" 
            value={commentText} 
            onChange={handleCommentChange} 
            onBlur={handleBlur}
            className={error ? 'error' : ''}
          />
           </div>
          <button className="button" onClick={() => setCommentText('')}>
            <img src={comment} alt="comment" height={20}/>
            <div className="button-name">
              COMMENT
            </div>
          </button>
        </div>
      </section>

      <div className="comments-form-break"></div>

      {displayComments.map((comment) => (
        <section className="comments-text" key={comment.id}>
          <div className="comments-text-avblank"></div>
          <div className="comments-text-name">{comment.name} </div>
          <div className="comments-text-timestamp">{formatDate(comment.timestamp)}</div>
          <div className="comments-text-words">{comment.comment}</div>
        </section>
      ))}
    </div>
  );
};

export default Comments;
