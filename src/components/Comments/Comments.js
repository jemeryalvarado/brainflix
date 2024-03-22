import details from "../../Data/video-details.json";
import "./Comments.scss";
import Hero from "../Hero/Hero";
import comment from "../../assets/Icons/add_comment.svg";
import avatar from '../../assets/Images/Mohan-muruge.jpg'

export default function Comments({ current, details }) {
  let info = (id) => {
    return details.find((item) => item.id === id);
  };
  const display = info(current);

  let displayComments = display.comments;

  return (
    <div className="comments">
      <section className="comments-form">
        <div className="comments-form-avatar"> <img src={avatar} alt="avatar" /></div>
        <form>
          <h5>Join The Conversation</h5>


          <input id="commenttext" type="text" placeholder="Add a new comment"></input> 
          <button id="button">
            {" "}
            <img src={comment} alt="upload" />
            COMMENT
          </button>
        </form>
      </section>

      {displayComments.map((comment) => (
        <>
          <section className="comments-text">
            <div key={comment.id}>{comment.name}</div>
            <div> {comment.timestamp}</div>

            <div>{comment.comment}</div>
          </section>
        </>
      ))}
    </div>
  );
}
