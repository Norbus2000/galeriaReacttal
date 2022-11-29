import "./Kep.css";

function Kep({ kepAdat, setAktKep, aktKep }) {
  const kattintottKep = kepAdat.id;

  return (
    <div
      className="kep"
      style={
        aktKep === kattintottKep
          ? { border: "1px solid black", borderRadius: 15 }
          : { border: "none" }
      }
    >
      <p>{kepAdat.cim}</p>
      <img
        style={{ cursor: "pointer" }}
        src={kepAdat.eleresiUt}
        alt="Erdo"
        onClick={() => setAktKep(kattintottKep)}
      />
    </div>
  );
}

export default Kep;
