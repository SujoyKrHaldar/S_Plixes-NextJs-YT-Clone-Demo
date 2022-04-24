function Lists({ title, children }) {
  return (
    <>
      <div className="list_template">
        <h2>{title}</h2>
        <div className="list">{children}</div>
      </div>
    </>
  );
}

export default Lists;
