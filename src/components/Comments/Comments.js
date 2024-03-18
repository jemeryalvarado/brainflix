import details from "../../Data/video-details.json";
import "./Comments.scss";
import Hero from "../Hero/Hero";

export default function Comments({details}) {
  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  } = details;

  return (
    <div className="comments">
      <form>
        <h2>Join The Conversation</h2>
        <input type="text" placeholder="Add a new comment" />
        <button>comment</button>
      </form>
      {comments.map((comment) => (
        <>
          <section>
            <div key={comment.id}>{comment.name}</div>
            <div> {comment.timestamp}</div>
            <div>{comment.comment}</div>
          </section>
        </>
      ))}
    </div>
  );
}
