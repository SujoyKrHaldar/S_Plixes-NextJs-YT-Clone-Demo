function Card_Med({ data }) {
  return (
    <>
      <div className="card card_med">
        <img className="thumnail" src={data.thumbnail} alt={data.title} />

        <div className="card_content">
          <h3 className="card_title">{data.title}</h3>
          <p className="card_date">{data.publishedAt}</p>
        </div>
      </div>
    </>
  );
}

export default Card_Med;
