import details from "../../Data/video-details.json";
import "./Comments.scss";
import Hero from "../Hero/Hero";
import comment from "../../assets/Icons/add_comment.svg";
import avatar from '../../assets/Images/Mohan-muruge.jpg'



const Comments = ({ current, details }) => {
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

// export default function Comments({ current, details }) {
//   let info = (id) => {
//     return details.find((item) => item.id === id);
//   };
//   const display = info(current);

//   let displayComments = display.comments;

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
//   };

//   return (
    

//     <div className="comments">




//       <section className="comments-form">




//         <div className="comments-form-avatar"> <img src={avatar} alt="avatar" /></div>
//         <form>
//           <h5>JOIN THE CONVERSATION</h5>


//           <input id="commenttext" type="text" placeholder="Add a new comment"></input> 
//           <button id="button">
//             {" "}
//             <img src={comment} alt="upload" />
//             COMMENT
//           </button>
//         </form>

       









//       </section>

//       <div className="comments-form-break"></div>


//       {displayComments.map((comment) => (
        
//         <>
        
//           <section className="comments-text">
//             <div className="comments-text-avblank"></div>
//             <div className="comments-text-name" key={comment.id}>{comment.name} {formatDate(comment.timestamp)}</div>
//             {/* <div className="comments-text-time">  </div> */}

//             <div className="comments-text-words" >{comment.comment}</div>
//           </section>
//         </>
//       ))}






//     </div>
//   );
// }
