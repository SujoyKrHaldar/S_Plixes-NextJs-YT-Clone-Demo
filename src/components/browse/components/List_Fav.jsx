import Card_Med from "../../designs/cards/Card_Med";

function List_Fav({ data }) {
  return (
    <>
      <div className="list_fav">
        <h2>All about Marvel</h2>
        <div className="list">
          {data.map((item, index) => (
            <Card_Med data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default List_Fav;
