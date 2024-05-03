import "./Description.scss";
import eyes from "../../assets/Icons/views.svg";
import heart from "../../assets/Icons/likes.svg";

const Description = ({ current, details }) => {
  const display = details;

  const formattedTimestamp = new Date(display.timestamp).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  return (
    <section className="description">
      <div className="description-title">
        <h1>{display.title}</h1>
      </div>

      <section className="description-data">
        <div className="description-data-ct">
          <p id="channel"> By {display.channel}</p>
          <p>{formattedTimestamp}</p>
        </div>

        <div className="description-data-vl">
          <p className="space">
            <img src={eyes} alt="views" />
            {display.views}
          </p>
          <p className="space">
            <img src={heart} alt="likes" />
            {display.likes}
          </p>
        </div>
      </section>

      <div>
        <p>{display.description}</p>
      </div>
      <div className="description-ammount">
        <h4>3 Comments</h4>
      </div>
    </section>
  );
};

export default Description;