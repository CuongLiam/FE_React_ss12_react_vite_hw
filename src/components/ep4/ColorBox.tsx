const ColorBox = () => {
  return (
    <>
      <div className="container d-flex p-4 gap-4 justify-content-center">
        <div
          className="box d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "red", width: "200px", height: "200px" }}
        >Box</div>
        <div
          className="box d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "green", width: "200px", height: "200px" }}
        >Box</div>
        <div
          className="box d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "blue", width: "200px", height: "200px" }}
        >Box</div>
      </div>
    </>
  );
};

export default ColorBox;
