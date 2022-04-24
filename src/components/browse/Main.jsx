import List_Fav from "./components/List_Fav";

function Main({ data }) {
  return (
    <>
      <div className="main">
        <List_Fav data={data} />
      </div>
    </>
  );
}

export default Main;
