import react, { useState } from "react";

const App = () => {
  const [myName, setmyName] = useState("Pcooe");

  let val = myName;

  const changename = () => {
    val === "pccoe" ? setmyName("dyp") : setmyName("pccoe");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changename}>
        CLICK
      </button>
    </div>
  );
};
export default App;
