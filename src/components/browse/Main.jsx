import Card_Med from "../designs/cards/Card_Med";
import Lists from "./components/Lists";

function Main({ data }) {
  return (
    <>
      <div className="main">
        <Lists title="All about Marvel">
          {data.map((item, index) => (
            <Card_Med data={item} key={index} />
          ))}
        </Lists>
      </div>
    </>
  );
}

export default Main;
