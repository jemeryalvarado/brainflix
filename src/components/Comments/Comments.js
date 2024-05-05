import "./Comments.scss";
import comment from "../../assets/Icons/add_comment.svg";
import avatar from '../../assets/Images/Mohan-muruge.jpg'



const Comments = ({ details }) => {
  const display = details;
  const displayComments = display.comments;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="comments">
      <section className="comments-form">
        <div className="comments-form-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <form>
          <h5>JOIN THE CONVERSATION</h5>
          <input id="commenttext" type="text" placeholder="Add a new comment" />
          <button class="button">
            <img src={comment} alt="comment" height={20}/>
            <div className="button-name">
            COMMENT
            </div>
          </button>
        </form>
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

