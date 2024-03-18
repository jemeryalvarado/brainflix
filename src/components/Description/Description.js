



export default function Description({details}) {

  return (
    <>
      <div>
        <h1>{details.title}</h1>
      </div>
      <div>
        <p>{details.channel}</p>
        <p>{details.timestamp}</p>
      </div>
      <div>
      <p>{details.views}</p>
        <p>{details.likes}</p>

      </div>
      <div>
        <p>{details.description}</p>
      </div>
      <div>
        <h2>3 Comments</h2>
      </div>

    </>
  );
}
